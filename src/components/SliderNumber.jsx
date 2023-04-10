/* eslint-disable react/prop-types */
const SliderNumber = ({ onClick, number, useref, className }) => {
  return (
    <button
      ref={useref}
      onClick={onClick}
      className={`round-button text-lg flex items-center justify-center p-[10px] } ${className}`}
      name={name}
    >
      <span className='text-white text-[1em] '>{number}</span>
    </button>
  )
}

export default SliderNumber
