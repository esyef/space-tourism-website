/* eslint-disable react/prop-types */
const Slidertext = ({ value, path, onClick }) => {
  return (
    <button
      // href={path}
      className='text-sm md:text-base text-white xl:hover:border-b-[3px] xl:hover:border-white xl:pb-2 uppercase last:mr-0 mr-8'
      onClick={onClick}
    >
      {value}
    </button>
  )
}
export default Slidertext
