import './home.scss'

export default function Home() {
  return (
    <>
      <section id='section-home'>
        <div className="bg-color-rose-lighter component-container">
          <div className='center'>
            <p className='text-left'>Hi! 👋🏻 I'm</p>
              <div className='text-center'>
                <h1 className='name'>Celia</h1>
              </div>
            <p className='text-right'>Luque Díaz</p>
          </div>
          <p className='text-below'>aka Celudirosa en RRSS</p>
        </div>
      </section>
    </>
  )
}