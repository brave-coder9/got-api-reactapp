import styled from "styled-components";
import { breakpoints } from "style";

export const TopbarContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: #21458e;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  @media (max-width: 767px) {
    
  }
  @media (max-width: ${breakpoints.xs}px) {
    
  }
`;
