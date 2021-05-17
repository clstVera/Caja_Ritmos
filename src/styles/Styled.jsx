import styled from 'styled-components'

const MainContainer = styled.div`
    height: 100vh;
    background-color: #8d8d8d;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MachineContainer = styled.div`
    outline: 5px solid orange;
    position: relative;
    width: 660px;
    text-align: center;
    background-color: #b3b3b3;
    display: flex;
    `

const PadContainer = styled.div`
    width: 350px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 0.4fr));
    grid-gap: 0.4rem;
    position: relative;
    float: left;
    `

const PadStyled = styled.div`   
    width: 100px;
    height: 80px;
    margin-top: 10px;
    margin-right: 10px;
    border-radius: 5px;
    padding-top: 35px;
    box-sizing: border-box;
    cursor: pointer; 
    background-color: grey;
    box-shadow: black 3px 3px 5px;`

const PowerContainer = styled.div`
    display: flex;
    align-items: center;
`

const Power = styled.p`
    width: 300px;
    padding: 15px;
    background-color: gray;
    box-sizing: border-box;
    align-self: center;
`

export { MainContainer, MachineContainer, PadContainer, PadStyled, PowerContainer, Power }