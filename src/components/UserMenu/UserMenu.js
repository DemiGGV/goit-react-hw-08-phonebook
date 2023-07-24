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
        Welcome, <Span>{user.name}</Span>
      </p>
      <Button
        email={user.email}
        type="button"
        onClick={() => dispatch(logoutUser())}
      >
        Logout
      </Button>
    </RightMenu>
  );
};
