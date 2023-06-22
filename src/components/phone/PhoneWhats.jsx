import './phonewhats.scss';
import Phone from './Phone';
import PdfFile from '/cv--celia-luque.pdf';
import { useState } from "react"

export default function PhoneWhats() {

	// download pdf file or open it in another browser tab
	const handleDownload = () => {
		window.open(PdfFile, '_blank');
	};

	// update status with initial value false
	const [toogleMenu, setMessageContainerClass] = useState( false );

	// funtion to switch the status of the phone menu between open and closed
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
						<p className='menssage-cv'>curriculum vitae</p>
					</div>
				</div>
				<Phone />
			</div>
		</button>
		</>
	);
}
