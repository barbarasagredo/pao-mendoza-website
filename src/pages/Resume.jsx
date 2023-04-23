const Resume = () => {
  return (
    <>
      <div className='flex flex-col items-center w-full min-h-screen pt-16'>
        <h2>RESUME</h2>
        <div className='pt-16 hover:opacity-60'>
          <p className='text-gray-400 flex'>
            <a href='/books/a-great-book.pdf' target='_blank' className='flex'>
              Click here to download
              <img src='src/images/download.svg' alt='download logo' />
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Resume;
