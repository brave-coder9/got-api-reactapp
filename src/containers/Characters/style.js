import { breakpoints } from "style";
import styled from "styled-components";

export const CharactersContainer = styled.div`
  .filter-options {
    margin-bottom: 20px;
    .search-option {
      width: 200px;
      margin-right: 10px;
    }
  }
  @media (max-width: ${breakpoints.sm}px) {
  }
  @media (max-width: 413px), (max-height: 845px) {
  }
`;
