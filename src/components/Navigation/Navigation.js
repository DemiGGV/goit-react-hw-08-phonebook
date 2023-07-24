import { useAuth } from 'hooks';
import { MenuItem, NavMenu } from './NavigationStyle';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavMenu>
      <MenuItem to="/">Home</MenuItem>
      {isLoggedIn && <MenuItem to="/contacts">Contacts</MenuItem>}
    </NavMenu>
  );
};
