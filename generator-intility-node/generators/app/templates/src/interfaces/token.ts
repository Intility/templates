/*
Author: Christian Marker (christian.marker@intility.no)
token.ts (c) 2021
Desc: description
Created:  2021-04-29T14:30:43.950Z
Modified: 2021-04-29T14:30:58.596Z
*/

export interface AzureToken extends Express.User {
    aud: string;
    iss: string;
    iat: number;
    nbf: number;
    exp: number;
    acct: number;
    acr: string;
    aio: string;
    amr: string[],
    appid: string;
    appidacr: string;
    family_name: string;
    given_name: string;
    in_corp: string;
    ipaddr: string;
    name: string;
    oid: string;
    onprem_sid: string;
    rh: string;
    roles: string[],
    scp: string;
    sub: string;
    tid: string;
    unique_name: string;
    upn: string;
    uti: string;
    ver: string;
}
