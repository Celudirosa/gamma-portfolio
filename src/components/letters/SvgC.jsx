export default function SvgC({ isHovered, setIsHovered }) {
  return (
    <svg className={`name ${isHovered ? 'hovered-c' : ''}`} viewBox="0 0 274 201" xmlns="http://www.w3.org/2000/svg" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <g clipPath="url(#clip0_209_22)">
        <path d="M136.97 201C123.854 201 111.734 200.173 100.611 198.519C89.4871 196.864 79.1936 194.465 69.7302 191.322C60.4328 188.179 52.0486 184.374 44.5775 179.907C37.2724 175.441 30.7975 170.395 25.1527 164.77C19.5079 159.146 14.7762 153.025 10.9576 146.407C7.30507 139.625 4.56567 132.428 2.7394 124.819C0.913134 117.209 0 109.185 0 100.748C0 87.0173 2.24133 74.6926 6.72398 63.7741C11.2066 52.8555 17.5156 43.4259 25.6507 35.4852C33.952 27.5444 43.7474 20.9272 55.037 15.6333C66.4927 10.3395 79.1106 6.45185 92.8906 3.97036C106.671 1.32345 121.364 0 136.97 0C164.53 0 187.939 3.30864 207.198 9.92593C226.457 16.5432 241.648 26.0556 252.772 38.463C264.062 50.8704 271.118 65.9247 273.94 83.6259L168.1 100.748C168.1 96.9432 167.269 93.7173 165.609 91.0704C163.949 88.258 161.708 86.0247 158.885 84.3704C156.063 82.716 152.742 81.4753 148.924 80.6481C145.271 79.821 141.287 79.4074 136.97 79.4074C130.993 79.4074 125.68 80.2346 121.032 81.8889C116.383 83.3778 112.647 85.6938 109.825 88.837C107.169 91.8148 105.84 95.6198 105.84 100.252C105.84 103.064 106.339 105.628 107.335 107.944C108.331 110.26 109.742 112.328 111.568 114.148C113.395 115.802 115.553 117.209 118.043 118.367C120.7 119.359 123.605 120.186 126.76 120.848C129.914 121.344 133.317 121.593 136.97 121.593C145.769 121.593 153.157 119.856 159.134 116.381C165.111 112.742 168.1 107.531 168.1 100.748L273.94 111.419C272.114 123.66 268.046 135.158 261.737 145.911C255.594 156.664 246.961 166.177 235.837 174.448C224.88 182.72 211.183 189.172 194.746 193.804C178.476 198.601 159.217 201 136.97 201Z"/>
      </g>
    </svg>
  )
}