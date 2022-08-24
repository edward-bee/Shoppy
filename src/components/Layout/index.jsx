import Header from './Header'
import Footer from './Footer'

function Index ({ children }) {
  return (
    <>
      <Header />
      <div className='content-wrapper min-h-[calc(100vh-125px)]'>
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Index
