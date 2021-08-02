import styled from "styled-components";

export const SectionWrap = styled.section`
  .container {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: flex;
  }

  .container div {
      flex: 1 1 300px;
  }

  img {
    width: 100%;
    border-radius: 10px;
  }
`;
