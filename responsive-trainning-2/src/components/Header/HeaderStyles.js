import styled from 'styled-components'


export const HeaderWrap = styled.header`

    header {
        width: 100%;
        height: 70px;
        background-color: #101010;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0px 5px 20px #000;

        @media (max-width: 315px) {
            flex-wrap: wrap;
        }
    }

    .menu {
        list-style: none;
        display:flex;

        @media (max-width: 315px) {
            flex-wrap: wrap;
            padding: 10px;
        }
    }

    .menu li a {
        color: #fff;
        display: block; 
        text-decoration: none;
        margin-left: 10px;
        border-radius: 10px;
    }

    .menu li a:hover{
        color: #fff;
        display: block; 
        text-decoration: none;
        background-color: #333;
        padding: 10px 20px 10px 20px;
    }

    .logo {
        width: 45px;
        height: 45px;
        border-radius: 10px;
        background-color: #ccc;

`