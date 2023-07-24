import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/user/authOperations';
import { useAuth } from 'hooks';
import { RightMenu } from 'components/MainContainerCSS';
import { Button, Span } from './UserMenuStyle';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <RightMenu>
      <p>
        Welcome, <Span>{user.email}</Span>
      </p>
      <Button type="button" onClick={() => dispatch(logoutUser())}>
        Logout
      </Button>
    </RightMenu>
  );
};
