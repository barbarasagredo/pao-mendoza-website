const WorksCard = ({ image, alt, title, description, date, link }) => {
  return (
    <>
      <div className='group relative'>
        <div className='max-w-xs min-h-80'>
          <img className='w-full' src={image} alt={alt} />
        </div>
        <div className='flex flex-col text-center text-transparent justify-center absolute left-0 top-0 group-hover:bg-gray-100 group-hover:opacity-75 duration-500 w-full h-full group-hover:text-text-strong'>
          <h3>{title}</h3>
          <p className='font-semibold tracking-tightest text-transparent group-hover:text-text-strong'>
            {description}
          </p>
          <p className='font-semibold text-transparent group-hover:text-text-strong'>
            {date}
          </p>
          <div className='flex justify-center pt-2 invisible group-hover:visible'>
            <a href={link} target='_blank'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#282828'
                strokeWidth='1.9'
                strokeLinecap='butt'
                strokeLinejoin='bevel'
              >
                <path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71'></path>
                <path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'></path>
              </svg>{' '}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
