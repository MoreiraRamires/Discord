import styled from "styled-components";
import { Hashtag } from 'styled-icons/heroicons-outline';

export const Container = styled.div`
grid-area:CI;
display:flex;
align-items:center;

padding: 0 17px;
background-color: var(--secondary);
box-shadow: rgba(0,0,0,0.2) 0px 1px 0px 0px;
z-index:2;


`;
export const HastagIcon = styled(Hashtag)`
width:24px;
height:24px;
color:var(--symbol)

`;

export const Title = styled.h1`
  margin-left:9px;

  font-size:16px;
  font-weight:bold;
  color:var(--white);
`;

export const Separator = styled.div`


>img{ 
  width:28px;
  height:28px;
  
  margin-left:10px}
`;


export const Description = styled.h5`
margin-left:9px;

font-size:14px;
color:var(--white);
`;