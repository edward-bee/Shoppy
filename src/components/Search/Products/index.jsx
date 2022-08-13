import Card from '@/components/Recommendations/Card'

function Index ({ products }) {
  return (
    <div className='grid gap-3 grid-cols-auto-fill'>
      {products?.map((item) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            image={item.images[0]}
            name={item.name}
            category={item.category}
          />
        )
      })}
    </div>
  )
}

export default Index
