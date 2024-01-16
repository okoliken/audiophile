import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

export const AnimatedText = styled(motion.span)`
  font-size: 2rem;
  color: #fff;
  font-weight: 900;
  letter-spacing: 1px;
  line-height: 25px;
`;

export const textAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 1 },
};

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const exitAnimation = {
  exit: { opacity: 0, transition: { duration: 1 } },
};

export const FullScreenPreloader = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  /* background-color: #000; */
  position: fixed;
  background: linear-gradient(-45deg, #d87d4a, #101010, #2c2c2c);
  background-size: 400% 400%;
  animation: ${gradient} 15s ease infinite;
  top: 0;
  left: 0;
  z-index: 9999;
`;
