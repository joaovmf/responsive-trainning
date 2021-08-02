import styled from 'styled-components'


export const AppWrap = styled.div`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'MuseoModerno',cursive;
}

body {
     width: 100%;
    background-color: #1a1a1a;
}

h1 {
    color: #fff;
    text-align: center;
    margin-top: 20px;

    @media (max-width: 280px) {
        padding: 35px;
        margin-right: 35px;
    }
}

`
