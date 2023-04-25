const WorksCard = ({ image, alt, title, description, date, link }) => {
  return (
    <>
      <div className='group relative'>
        <div className='max-w-xs min-h-60'>
          <img className='w-64' src={image} alt={alt} />
        </div>
        <div className='flex flex-col text-center text-transparent justify-center absolute left-0 top-0 group-hover:bg-gray-100 group-hover:opacity-75 duration-500 w-full h-full group-hover:text-text-strong'>
          <h3>{title}</h3>
          <p className='font-semibold tracking-tightest text-transparent text-sm group-hover:text-text-strong'>
            {description}
          </p>
          <p className='font-semibold text-transparent group-hover:text-text-strong'>
            {date}
          </p>
          <div className='flex justify-center pt-2 invisible group-hover:visible'>
            <a href={link} target='_blank'>
              <img src='src/images/link.svg' alt='link icon' />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorksCard;
