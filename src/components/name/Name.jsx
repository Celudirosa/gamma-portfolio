import SvgC from '../celia/SvgC';
import SvgE from '../celia/SvgE';
import SvgL from '../celia/SvgL';
import SvgI from '../celia/SvgI';
import SvgA from '../celia/SvgA';
import './name.scss';

export default function Home() {
  return (
    <>
      <section id='section-name'>
        <div className="bg-color-rose-lighter component-container">
          <div className='center'>
            <p className='text text-left font-weight-bold'>Hi! 👋🏻 I'm</p>
              <div className='text-center'>
                <div className='text-color-buff-dark'>
                  <SvgC />
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