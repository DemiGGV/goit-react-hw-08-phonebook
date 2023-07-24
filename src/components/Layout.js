import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AppBar } from './AppBar/AppBar';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectAuthError } from 'redux/user/authSelectors';

export const toastOpts = {
  position: 'top-right',
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};

export const Layout = () => {
  const error = useSelector(selectAuthError);

  useEffect(() => {
    if (!!error) {
      toast.error(error, toastOpts);
    }
  }, [error]);

  return (
    <div style={{ maxWidth: 960, margin: '0 auto' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToastContainer />
    </div>
  );
};
