import SvgC from '../letters/SvgC';
import SvgE from '../letters/SvgE';
import SvgL from '../letters/SvgL';
import SvgI from '../letters/SvgI';
import SvgA from '../letters/SvgA';
import './name.scss';

export default function Home() {
  return (
    <>
      <section id='section-name'>
        <div className="bg-color-rose-lighter component-container">
          <div className='center'>
            <p className='text text-left font-weight-bold'>Hi! 👋🏻 I'm</p>
              <div className='text-center'>
                <div>
                  <div className='animation-container'>
                    <SvgC />
                    <div className="hover-image-container">
                      <img src="./src/assets/imgs/hover-01.png" alt="Descripción de la imagen" className="hover-image" />
                    </div>
                  </div>
                  <SvgE />
                  <SvgL />
                  <SvgI />
                  <SvgA />
                </div>
              </div>
            <p className='text text-right font-weight-bold'>Luque Díaz</p>
          </div>
          <div className='text-bottom'>
            <p>👇🏻</p>
            <p className='text'>aka <span className='font-weight-bold'>Celudirosa</span> en RRSS</p>
          </div>
        </div>
      </section>
    </>
  )
}