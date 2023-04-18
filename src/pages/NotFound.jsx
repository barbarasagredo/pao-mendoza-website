import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div>
        <h1>404</h1>
        <h2>Page not found</h2>
        <p>
          Sorry, the page you're looking for doesn't exist or is unavailable.
        </p>
        <Link to={'/'}>Go back</Link>
      </div>
    </>
  );
};

export default NotFound;
