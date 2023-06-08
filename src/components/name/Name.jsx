import React, { useState } from 'react';
import React from 'react';
import SvgC from '../letters/SvgC';
import SvgE from '../letters/SvgE';
import SvgL from '../letters/SvgL';
import SvgI from '../letters/SvgI';
import SvgA from '../letters/SvgA';
import './name.scss';

export default function Home() {

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  return (
    <>
      <section id='section-name'>
        <div className="bg-color-rose-lighter component-container">
          <div className='center'>
            <p className='text text-left font-weight-bold'>Hi! 👋🏻 I'm</p>
              <div className='text-center'>
                <div>
                  <SvgC fill={hoveredIndex === 0 ? '#5875AC' : '#5875AC'} onMouseEnter={() => handleHover(0)} onMouseLeave={() => handleHover(null)} />
                  <SvgE fill={hoveredIndex === 0 ? '#8D4E57' : '#8D4E57'} onMouseEnter={() => handleHover(0)} onMouseLeave={() => handleHover(null)} />
                  <SvgL fill={hoveredIndex === 0 ? '#835C84' : '#835C84'} onMouseEnter={() => handleHover(0)} onMouseLeave={() => handleHover(null)} />
                  <SvgI fill={hoveredIndex === 0 ? '#BC858D' : '#BC858D'} onMouseEnter={() => handleHover(0)} onMouseLeave={() => handleHover(null)} />
                  <SvgA fill={hoveredIndex === 0 ? '#9CADCE' : '#9CADCE'} onMouseEnter={() => handleHover(0)} onMouseLeave={() => handleHover(null)} />
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