import Layout from '@/components/Layout'
import Category from '@/components/Categories/Category'
import { OPTIONS } from '@/utils/constants'

function Categories () {
  return (
    <Layout>
      <section className='my-3'>
        <h1 className='text-xl -tracking-tighter'>Categorías</h1>

        <div className='mt-4 grid grid-cols-1 lg:grid-cols-2'>
          {OPTIONS.map((item) => {
            return <Category key={item.id} path={item.name} />
          })}
        </div>
      </section>
    </Layout>
  )
}

export default Categories
