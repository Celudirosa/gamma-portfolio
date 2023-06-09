import { useState } from "react"

export default function SvgL({ fill, onMouseEnter, onMouseLeave }) {
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
    <svg className="name" viewBox="0 0 86 201" fill={isHovered ? fill : '#DE7530'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_209_28)">
        <path d="M0 193.111C0 179.877 0 166.725 0 153.656C0 140.421 0 127.269 0 114.2C0 100.965 0 87.8136 0 74.7444C0 63.4951 0 52.2457 0 40.9963C0 29.5815 0 18.2494 0 7H86.1667C86.1667 13.9482 86.1667 20.8963 86.1667 27.8445C86.1667 34.6272 86.1667 41.4926 86.1667 48.4408C86.1667 72.4284 86.1667 96.4988 86.1667 120.652C86.1667 144.805 86.1667 168.958 86.1667 193.111H0Z"/>
      </g>
    </svg>
  )
}