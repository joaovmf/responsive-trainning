import styled from 'styled-components'

export const SectionWrap = styled.section`
.container {
    border: 0px solid #fff;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0px 20px 0px 20px;
    justify-content: center;
    display: grid;
    grid-gap: 20px;
    grid-template-areas: 
    "sidenav item item" 
    "sidenav item item" 
    "sidenav item item"
    "footer footer footer";
    
}

img {
    width: 100%;
    border-radius: 20px;
}

.sidenav {
    max-width: 300px;
    min-width: 250px;
    height: 900px;
    background-color: #333;
    border-radius: 20px;
    grid-area: "sidenav";
    grid-row: sidenav;

}

.item {
    max-width: 300px;
    min-width: 250px;
    height: 300px;
    background-color: #333;
    border-radius: 20px;
    grid-area: "item";
}

.footer {
    width: auto;
    height: 300px;
    background-color: #333;
    border-radius: 20px;
    grid-area: "footer";
    grid-column: footer;
}

@media (max-width: 850px) {
    .container {
        grid-template-areas: 
        "sidenav item" 
        "sidenav item" 
        "sidenav item"
        "footer footer";
    }

@media (max-width: 580px) {
    .sidenav{
        height: 250px;
    }
    .container {
        grid-template-areas: 
        "sidenav" 
        "item" 
        "item"
        "footer";
    }
}
`