import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

export const StatSection = styled.section`
width: 300px;
padding: 10px;
margin-top: 30px;
text-align: center;
border-radius: 10px;
box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.11),
0px 2px 2px 0px rgba(0,0,0,0.11),
0px 4px 4px 0px rgba(0,0,0,0.11),
0px 6px 8px 0px rgba(0,0,0,0.11),
0px 8px 16px 0px rgba(0,0,0,0.11);
`

export const StatTitle = styled.h2`
text-transform: uppercase;
`

export const StatList = styled.ul`
display: flex;
justify-content: space-around;
border-radius: 10px;
`

export const StatItem = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
width: 60px;
height: 60px;
background-color: ${getRandomHexColor};
`