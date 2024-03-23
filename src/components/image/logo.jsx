export const LogoSvg = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="none"
      >
        <g clipPath="url(#a)">
          <path
            fill="#FFDA44"
            d="M14 28c7.732 0 14-6.268 14-14S21.732 0 14 0 0 6.268 0 14s6.268 14 14 14Z"
          />
          <path fill="#338AF3" d="M0 14C0 6.268 6.268 0 14 0s14 6.268 14 14" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h28v28H0z" />
          </clipPath>
        </defs>
      </svg>
    );
}