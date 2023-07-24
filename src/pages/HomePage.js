import { Helmet } from 'react-helmet';
import { useAuth } from 'hooks';

export default function HomePage() {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <Helmet>
        <title>Homepage</title>
      </Helmet>
      <h1>Phone book</h1>
      {!isLoggedIn && <h2>Please Authorize...</h2>}
    </div>
  );
}
