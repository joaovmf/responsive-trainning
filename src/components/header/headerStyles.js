import styled from "styled-components";

export const HeaderWrap = styled.div`
background-color: #002b34;  
width: 100%;
display: flex;
flex-flow: column wrap;
align-items: center;

@media (min-width: 250px) {
  flex-flow: row wrap;
  justify-content: space-between; 
}
`;