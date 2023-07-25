import { Title, Title2, Button } from './NotFoundStyle';

export const NotFound = () => {
  return (
    <>
      <Title>404</Title>
      <Title2>Page not found!</Title2>
      <Button to={'/'}>Return to main page?</Button>
    </>
  );
};
