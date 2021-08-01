import styled from "styled-components";

const media = {
  desktop: "@media(min-width: 1000px)",
};

export const ContentWrap = styled.div`
width: 100%;
border: 1px solid green;
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;

${media.desktop} {
    width: 1000px;
}

h3 {
    font-size: 20px;
    font-weight: bold;
    color: gray;
    margin-left: 14px;
    align-self: flex-start;
}

.boxWrap {  
width: 90%;
border 1px solid blue;

${media.desktop} {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between; 
}
    .img {
        width: 100%;
        height: 150px;
        background-color:gray;

        ${media.desktop} {  
            width: 48%;
        }
    }
    .cont{
        margin-top: 10px;
        width: 100%;
        height: 150px;
        background-color:gray;
        
        ${media.desktop} {
            margin: 0;
            width: 48%;
        }

    }
}
`;
