// eslint-disable-next-line import/no-absolute-path
import svg from '/logo.svg'

function Logo () {
  return (
    <figure className='w-[40px] h-[40px]'>
      <img src={svg} alt='logo' className='object-contain w-full h-full' />
    </figure>
  )
}

export default Logo
