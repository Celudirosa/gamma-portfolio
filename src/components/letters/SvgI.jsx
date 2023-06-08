import { useState } from "react"

export default function SvgI({ fill, onMouseEnter, onMouseLeave }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onMouseEnter();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onMouseLeave();
  };

  return (
    <>
      <svg className="name" viewBox="0 0 86 201" fill={isHovered ? fill : '#DE7530'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_209_31)">
      <path d="M0 192.852C0 185.242 0 177.715 0 170.27C0 162.66 0 155.133 0 147.689C0 140.079 0 132.552 0 125.107C0 121.964 0 118.821 0 115.678C0 112.535 0 109.391 0 106.248C9.62941 106.248 19.1758 106.248 28.6392 106.248C38.2686 106.248 47.898 106.248 57.5274 106.248C67.1568 106.248 76.7032 106.248 86.1666 106.248C86.1666 115.843 86.1666 125.438 86.1666 135.033C86.1666 144.628 86.1666 154.306 86.1666 164.067C86.1666 173.662 86.1666 183.257 86.1666 192.852H0ZM0 106.248C0 94.9988 0 83.7494 0 72.5C0 61.2506 0 50.0839 0 39H86.1666C86.1666 44.4593 86.1666 49.9185 86.1666 55.3778C86.1666 60.837 86.1666 66.2963 86.1666 71.7555C86.1666 77.2148 86.1666 82.6741 86.1666 88.1333C86.1666 88.1333 86.0836 88.216 85.9175 88.3815C71.6395 91.3593 57.2783 94.337 42.8342 97.3148C28.5561 100.293 14.2781 103.27 0 106.248Z"/>
      </g>
      </svg>
    </>
  )
}