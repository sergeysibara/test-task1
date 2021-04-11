import styled from 'styled-components';

export const MainLayoutStyleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;

  header {
    min-height: 100px;
    background-color: yellow;

    @media (max-width: 767px) {
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

    @media (max-width: 575px) {
      background-color: lightpink;
    }
  }
`;
