/* eslint-disable react/prop-types */
const Slidertext = ({ value, path }) => {
  return (
    <a
      href={path}
      className='text-sm md:text-base text-white xl:hover:border-b-[3px] xl:hover:border-white xl:pb-2 uppercase last:mr-0 mr-8'
    >
      {value}
    </a>
  )
}
export default Slidertext
