/* eslint-disable react/prop-types */
const Slidertext = ({ value, path, onClick }) => {
  return (
    <a
      href={`${path}`}
      className='text-sm md:text-base text-periwinkleBlue uppercase tab-txt'
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
    >
      {value}
    </a>
  )
}
export default Slidertext
