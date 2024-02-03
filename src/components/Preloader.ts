import styled, { keyframes } from "styled-components";



const gradient = keyframes`
     20%{background-position:0%   0%, 50%  50%,100%  50%}
     40%{background-position:0% 100%, 50%   0%,100%  50%}
     60%{background-position:0%  50%, 50% 100%,100%   0%}
     80%{background-position:0%  50%, 50%  50%,100% 100%}
`;

export const FullScreenPreloader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`

export const Loader = styled.div`
  width: 60px;
  aspect-ratio: 2;
  --_g: no-repeat radial-gradient(circle closest-side, #000 90%, #0000);
  background: var(--_g) 0% 50%, var(--_g) 50% 50%, var(--_g) 100% 50%;
  background-size: calc(100% / 3) 50%;
  animation: ${gradient} 1s infinite linear;
`;
