import Layout from '@/components/Layout'
import Category from '@/components/Categories/Category'

function Categories () {
  return (
    <Layout>
      <section className='my-3'>
        <h1 className='text-xl -tracking-tighter'>Categorías</h1>

        <div className='mt-4 grid grid-cols-1 lg:grid-cols-2'>
          <Category path='Celulares y Teléfonos' />
          <Category path='Electrónica, Audio y Video' />
          <Category path='Deportes y Fitness' />
        </div>
      </section>
    </Layout>
  )
}

export default Categories
