const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 120"
      width="150"
      height="48"
    >
      <defs>
        <linearGradient id="nestGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6C63FF" />
          <stop offset="100%" stopColor="#48C9B0" />
        </linearGradient>

        <linearGradient id="pingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6C63FF" />
          <stop offset="100%" stopColor="#48C9B0" />
        </linearGradient>
      </defs>

      <g transform="translate(56, 60)">
        <path
          d="M -38,18 Q 0,46 38,18"
          stroke="url(#nestGrad)"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />

        <path
          d="M -26,10 Q 0,32 26,10"
          stroke="url(#nestGrad)"
          strokeWidth="4.5"
          fill="none"
          strokeLinecap="round"
        />

        <path
          d="M -14,3 Q 0,18 14,3"
          stroke="url(#nestGrad)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />

        <circle cx="0" cy="-10" r="16" fill="url(#pingGrad)" />

        <polygon points="-5,4 5,4 0,13" fill="url(#pingGrad)" />

        <circle cx="-6" cy="-10" r="2.5" fill="white" />
        <circle cx="0" cy="-10" r="2.5" fill="white" />
        <circle cx="6" cy="-10" r="2.5" fill="white" />
      </g>

      <text
        x="108"
        y="72"
        fontFamily="Segoe UI, Arial, sans-serif"
        fontSize="38"
        fontWeight="700"
        letterSpacing="-1"
        fill="currentColor"
      >
        Ping
        <tspan fill="url(#nestGrad)">Nest</tspan>
      </text>

      <text
        x="110"
        y="92"
        fontFamily="Segoe UI, Arial, sans-serif"
        fontSize="12"
        fill="#9492A8"
        letterSpacing="2"
      >
        CHAT · CONNECT · NEST
      </text>
    </svg>
  );
};

export default Logo;