import styled from 'styled-components'
  
export const MenuWrap = styled.ul`
ul {
    padding:0px;
    margin:0px;
    list-style:none;
    margin-right: 20px;
    color:#fff;
    font-size: 15px;
    display:block;
}

ul li { 
    display: inline; 

}

ul li a {
    padding: 2px 10px;
    display: inline-block;
    color: #EDEDED;
    text-decoration: none;
}

ul li a:hover {
   color:#6D6D6D;
   background-color: #FFFF;
    border-bottom:3px solid #002b34;
}
`