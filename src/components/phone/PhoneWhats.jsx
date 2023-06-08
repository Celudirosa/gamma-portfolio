import './phonewhats.scss';
import Phone from './Phone';

// Cuando llamas a algo de public, con que solo pogas /la ruta dentro del public sobra
import PdfFile from '/cv--celia-luque.pdf';

export default function PhoneWhats() {
	const handleDownload = () => {
		window.open(PdfFile, '_blank');
	};

	return (
		<>
			<div className="message-container">
				<div className="menssage">
					<p>Would u like 2 know more? 👀</p>
				</div>
				<div className="menssage">
					<a href={PdfFile} download onClick={handleDownload}>
						📄 Download
					</a>
					<p>curriculum vitae</p>
				</div>
				<Phone />
			</div>
		</>
	);
}
