import styled from "styled-components";


export const ContentWrap = styled.div`
width: 90%;
border: 3px solid green;
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;

h2 {
    font-size: 20px;
    font-weight: bold;
    color: gray;
    margin-left: 14px;
    align-self: flex-start;
}

.box {  
width: 90%;
border: 3px solid blue;

@media(min-width: 950px) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between; 
  }

  .cont{
    border: 3px solid pink;
      width: 100%;
      height: 400px;
  }
  .cont:hover {
     background: #76f5f1;
  }

  h1 {
    font-weight: bold;
    margin-left: 14px;
    align-self: flex-start;
  }

  p {
   font-size: 20px;
    font-weight: bold;
    margin-left: 14px;
    align-self: flex-start;
  }
 
}
`;
