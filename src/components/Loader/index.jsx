import { DotPulse } from '@uiball/loaders'

function Index () {
  return (
    <div className='flex flex-col justify-center items-center'>
      <DotPulse size={40} speed={1.3} color='blue' />
      <p className='pt-2 -tracking-tighter text-gray-600'>Loading...</p>
    </div>
  )
}

export default Index
