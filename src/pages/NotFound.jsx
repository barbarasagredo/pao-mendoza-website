import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center w-full min-h-screen space-y-3'>
        <h1 className='text-8xl'>404</h1>
        <h2>Page not found</h2>
        <p>
          Sorry, the page you're looking for doesn't exist or is unavailable.
        </p>
        <span className='border border-gray-500 rounded-md w-24 h-11 hover:bg-gray-400 hover:text-white text-sm flex items-center justify-center'>
          <Link to={'/'}>Go back</Link>
        </span>
      </div>
    </>
  );
};

export default NotFound;
