import { motion } from "framer-motion";
import styled from "styled-components";

export const DialogView = styled( motion.dialog )`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  /* top: 72px; */
  border: none;
  z-index: 100;
`;
