import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useAccount,
  useMsal,
} from "@azure/msal-react";
import { Button } from "@intility/bifrost-react";

export default function Profile() {
  const { instance } = useMsal();
  const account = useAccount();
  return (
    <div className="bf-content bfl-page-padding">
      <AuthenticatedTemplate>
        <p>Hello, {account?.name}!</p>
        <Button onClick={() => instance.logout()}>Logout</Button>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <p>You are not logged in.</p>
        <Button onClick={() => instance.loginPopup()}>Login</Button>
      </UnauthenticatedTemplate>
    </div>
  );
}
