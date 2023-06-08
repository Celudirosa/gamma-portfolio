import PhoneWhats from '../phone/PhoneWhats';
import './about.scss';

export default function About() {
  return (
    <>
      <section className="bg-color-violet-lighter text-color-gray-lighter" id='section-about'>
        <div>
          <h1 className='font-weight-bold'>ABOUT ME 🙆🏻‍♀️</h1>
          <div>
            <p>Hello! I'm <span className="font-weight-bold">Celia</span>, a multi-talented professional specializing in <span className="font-weight-bold">graphic design</span>, <span className="font-weight-bold">UX/UI design</span>, and <span className="font-weight-bold">front-end web development</span>. Originally from Mérida, I currently reside in Valencia.</p>
            <p>With a strong background in graphic design, I excel at creating visually <span className="font-weight-bold">appealing designs</span> that effectively <span className="font-weight-bold">communicate messages</span>.</p>
            <p>Additionally, my expertise in UX/UI design allows me to craft <span className="font-weight-bold">intuitive and seamless</span> user experiences through research and prototyping.</p>
            <p>Furthermore, I possess in-depth knowledge of front-end web development, transforming design concepts into fully functional websites using <span className="font-weight-bold">HTML</span>, <span className="font-weight-bold">CSS</span>, <span className="font-weight-bold">SCSS</span>, <span className="font-weight-bold">JavaScript</span> and <span className="font-weight-bold">React</span>.</p>
            <p>I am passionate about continuously <span className="font-weight-bold">learning and growing</span> in my field. If you're looking for a dedicated designer and developer to bring your vision to life, </p>
          </div>
          <p className='font-weight-bold'>...I would love to be hired with you! 🔥</p>
          <PhoneWhats />
        </div>
      </section>
    </>
  )
}