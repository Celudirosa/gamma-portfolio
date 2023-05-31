import './name.scss';

export default function Home() {
  return (
    <>
      <section id='section-name'>
        <div className="bg-color-rose-lighter component-container">
          <div className='center'>
            <p className='text-left'>Hi! 👋🏻 I'm</p>
              <div className='text-center'>
                <h1 className='name text-color-buff'>Celia</h1>
              </div>
            <p className='text-right'>Luque Díaz</p>
          </div>
          <div className='text-bottom'>
            <p>👇🏻</p>
            <p>aka Celudirosa en RRSS</p>
          </div>
        </div>
      </section>
    </>
  )
}