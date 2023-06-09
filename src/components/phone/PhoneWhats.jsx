import './phonewhats.scss';
import Phone from './Phone';
import PdfFile from '/cv--celia-luque.pdf';

export default function PhoneWhats() {
	const handleDownload = () => {
		window.open(PdfFile, '_blank');
	};

	return (
		<>
			<div className="menssage-container">
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
		</>
	);
}
