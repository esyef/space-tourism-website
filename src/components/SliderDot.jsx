/* eslint-disable react/prop-types */
const SliderDot = ({ onclick }) => {
  return (
    <button
      className='h-[10px] w-[10px] inline-block rounded-full bg-white mix-blend-normal opacity-[0.17]'
      onClick={onclick}
    >
      <span className='sr-only'>dot</span>
    </button>
  )
}

export default SliderDot
