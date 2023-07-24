import { RightMenu } from 'components/MainContainerCSS';
import { Button } from './AuthNavStyle';

export const AuthNav = () => {
  return (
    <RightMenu>
      <Button to="/register">Register</Button>
      <Button to="/login">Log In</Button>
    </RightMenu>
  );
};
