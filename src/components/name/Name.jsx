import React, { useState } from 'react';
import SvgC from '../letters/SvgC';
import SvgE from '../letters/SvgE';
import SvgL from '../letters/SvgL';
import SvgI from '../letters/SvgI';
import SvgA from '../letters/SvgA';
import './name.scss';

export default function Name() {

  // CHANGE LETTERS COLORS
  // stores the index of the element on which the mouse cursor is located
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // function for hover event
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
                  <SvgC fill={hoveredIndex === 0 ? '#8A6079' : '#8A6079'} onMouseEnter={() => handleHover(0)} onMouseLeave={() => handleHover(null)}/>
                  <SvgE fill={hoveredIndex === 0 ? '#7A91BD' : '#7A91BD'} onMouseEnter={() => handleHover(0)} onMouseLeave={() => handleHover(null)}/>
                  <SvgL fill={hoveredIndex === 0 ? '#8D4E57' : '#8D4E57'} onMouseEnter={() => handleHover(0)} onMouseLeave={() => handleHover(null)}/>
                  <SvgI fill={hoveredIndex === 0 ? '#414141' : '#414141'} onMouseEnter={() => handleHover(0)} onMouseLeave={() => handleHover(null)}/>
                  <SvgA fill={hoveredIndex === 0 ? '#6C4B5E' : '#6C4B5E'} onMouseEnter={() => handleHover(0)} onMouseLeave={() => handleHover(null)}/>
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