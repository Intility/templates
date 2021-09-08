import base64
import time
from datetime import datetime, timedelta
from typing import Optional

from cryptography import x509
from cryptography.hazmat.backends import default_backend as crypto_default_backend
from cryptography.hazmat.primitives import hashes, serialization as crypto_serialization
from cryptography.hazmat.primitives.asymmetric import rsa
from cryptography.x509.oid import NameOID
from jose import jwt


def generate_key_and_cert():
    """
    Generate a private key and signing cert. We'll use the signing key to sign the JWT token
    and the signing certs will be used to mock the `keys` endpoint in Azure.
    """
    signing_key = rsa.generate_private_key(backend=crypto_default_backend(), public_exponent=65537, key_size=2048)
    subject = issuer = x509.Name(
        [
            x509.NameAttribute(NameOID.COUNTRY_NAME, 'NO'),
            x509.NameAttribute(NameOID.STATE_OR_PROVINCE_NAME, 'OSLO'),
            x509.NameAttribute(NameOID.LOCALITY_NAME, 'OSLO'),
            x509.NameAttribute(NameOID.ORGANIZATION_NAME, 'Intility AS'),
            x509.NameAttribute(NameOID.COMMON_NAME, 'intility.no'),
        ]
    )
    signing_cert = (
        x509.CertificateBuilder()
        .subject_name(subject)
        .issuer_name(issuer)
        .public_key(signing_key.public_key())
        .serial_number(x509.random_serial_number())
        .not_valid_before(datetime.utcnow())
        .not_valid_after(
            # Our certificate will be valid for 10 days
            datetime.utcnow()
            + timedelta(days=10)
            # Sign our certificate with our private key
        )
        .sign(signing_key, hashes.SHA256(), crypto_default_backend())
        .public_bytes(crypto_serialization.Encoding.DER)
    )
    return signing_key, signing_cert


signing_key_a, signing_cert_a = generate_key_and_cert()


def build_openid_keys() -> dict:
    """
    Build OpenID keys which we'll host at https://login.microsoftonline.com/common/discovery/keys
    """
    return {
        'keys': [
            {
                'kty': 'RSA',
                'use': 'sig',
                'kid': 'real thumbprint',
                'x5t': 'another thumbprint',
                'n': 'somebase64encodedmodulus',
                'e': 'somebase64encodedexponent',
                'x5c': [
                    base64.b64encode(signing_cert_a).decode(),
                ],
            }
        ]
    }


def create_access_token(roles: Optional[list] = None, scopes: Optional[str] = None):
    """
    Create an access token with the given groups, signed with the the API will validate it with.
    """
    if not roles:
        roles = []
    issued_at = int(time.time())
    expires = issued_at + 3600
    claims = {
        'aud': 'oauth299-9999-9999-abcd-efghijkl1234567890',
        'iss': 'https://login.microsoftonline.com/intility_tenant/v2.0',
        'iat': issued_at,
        'nbf': issued_at,
        'exp': expires,
        'name': 'Test user / Intility AS',
        'preferred_username': 'test.user@intility.no',
        'scp': scopes or 'user_impersonation',
        'tid': 'intility_tenant',
        'roles': roles,
        'sub': 'some long val',
        'ver': '2.0',
    }
    return jwt.encode(
        claims,
        signing_key_a.private_bytes(
            crypto_serialization.Encoding.PEM,
            crypto_serialization.PrivateFormat.PKCS8,
            crypto_serialization.NoEncryption(),
        ),
        algorithm='RS256',
        headers={'kid': 'real thumbprint', 'x5t': 'another thumbprint'},
    )
