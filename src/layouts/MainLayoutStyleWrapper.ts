import styled from 'styled-components';
import { breakpointsDown } from 'styles/breakpoints';

export const MainLayoutStyleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;

  header {
    min-height: 100px;
    background-color: yellow;

    @media (${breakpointsDown.md}) {
      background-color: #ffffb7;
    }
  }

  .content {
    flex: 1 0 auto;
  }

  footer {
    flex: 0 0 auto;
    min-height: 100px;
    background-color: green;

    @media (${breakpointsDown.sm}) {
      background-color: lightpink;
    }
  }
`;
