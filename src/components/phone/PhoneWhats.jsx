import './phonewhats.scss';
import Phone from './Phone';
import PdfFile from '/cv--celia-luque.pdf';
import { useState } from "react"

export default function PhoneWhats() {
	const handleDownload = () => {
		window.open(PdfFile, '_blank');
	};

	const [toogleMenu, setMessageContainerClass] = useState( false );

	const togglePhone = () => {
	  setMessageContainerClass( !toogleMenu );
	};

	return (
		<>
		<button className="btn-no-class" onClick={ togglePhone }>
			<div className={`menssage-container ${ toogleMenu ? 'toggle-phone' : '' }`}>
				<div className='menssages'>
					<div className="menssage-first">
						<p>Would u like 2 know more? 👀</p>
					</div>
					<div className="menssage-second">
						<a href={PdfFile} download onClick={handleDownload}>
							📄 Download
						</a>
						<p>curriculum vitae</p>
					</div>
				</div>
				<Phone />
			</div>
		</button>
		</>
	);
}
