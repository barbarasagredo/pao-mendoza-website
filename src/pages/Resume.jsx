const Resume = () => {
  return (
    <>
      <div className='flex flex-col items-center w-full min-h-screen pt-20'>
        <h2>RESUME</h2>
        <div className='pt-10 hover:opacity-60'>
          <p className='text-gray-400 flex'>
            <a href='src\images\CVPM.pdf' target='_blank' className='flex'>
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
