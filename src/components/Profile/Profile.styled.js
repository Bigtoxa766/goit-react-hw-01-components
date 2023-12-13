import styled from 'styled-components';

export const ProfileContainer = styled.div`

border-radius: 10px;
box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.11),
0px 2px 2px 0px rgba(0,0,0,0.11),
0px 4px 4px 0px rgba(0,0,0,0.11),
0px 6px 8px 0px rgba(0,0,0,0.11),
0px 8px 16px 0px rgba(0,0,0,0.11);

width: 300px;
text-align: center;
padding: 10px;
margin-top: 30px;
user-select: none;
`

export const ProfileImg = styled.img`
width: 200px;
border-radius: 50%;
`

export const StatContainer = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: space-around;

`

export const StatItem = styled.li`
 display: flex;
 flex-wrap: wrap;
 flex-direction: column;
 width: 100px;
 border-top: 1px solid gray;
 padding-top: 10px;

 &:hover{
        box-shadow: -12px -8px 40px 0px rgba(70,70,70,0.12) inset;
 }
`

    