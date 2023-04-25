const AboutMe = () => {
  return (
    <>
      <div className='flex items-center justify-around w-full min-h-screen pb-4 pt-24 px-4'>
        <div className='self-start'>
          <img
            src='src/images/46d515aa182b9081608b0330907380a1.jpg'
            alt='profile picture'
            width='200'
          />
        </div>
        <div className='self-auto px-2 text-center'>
          <h2>ABOUT ME</h2>
        </div>
        <div className='font-semibold bg-gray-gray w-60 h-64 min-h-72 flex flex-col justify-between self-end'>
          <div className='text-xs px-4 pt-6'>
            <p>I LIKE MOVIES,</p>
            <p>MAKE MOVIES,</p>
            <p>CODE MOVIES,</p>
            <p>I AM A HUMAN WHO LIKES FILMS AND TECHNOLOGY</p>
          </div>
          <div className='text-2xs px-4 pb-4'>
            <p>A BROKEN HUMAN ® </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
