import GridItem from '../GridItem'

function Grid () {
  return (
    <section className='mt-10'>
      <div className='grid justify-items-center gap-4 grid-cols-2 sm:grid-cols-auto-fill'>
        <GridItem price='100' name='producto' />
      </div>
    </section>
  )
}

export default Grid
