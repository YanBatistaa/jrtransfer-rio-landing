import React from 'react';

// SVG da bandeira do Brasil
export const BrazilFlag = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6" {...props}>
    <rect fill="#009B3A" width="9" height="6"/>
    <path fill="#FFDF00" d="M4.5 1L1 3l3.5 2L8 3z"/>
    <circle fill="#002776" cx="4.5" cy="3" r="1.1"/>
  </svg>
);

// SVG da bandeira dos Estados Unidos
export const USFlag = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1235 650" {...props}>
    <rect width="1235" height="650" fill="#FFF"/>
    <path d="M0 0h1235v350H0z" fill="#B22234"/>
    <path d="M0 50h1235v50H0zm0 100h1235v50H0zm0 100h1235v50H0zM0 400h1235v50H0zm0 100h1235v50H0zm0 100h1235v50H0z" fill="#FFF"/>
    <path d="M0 0h494v350H0z" fill="#3C3B6E"/>
  </svg>
);

// SVG da bandeira da Espanha
export const SpainFlag = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 4" {...props}>
    <path fill="#C60B1E" d="M0 0h6v4H0z"/>
    <path fill="#FFC400" d="M0 1h6v2H0z"/>
  </svg>
);