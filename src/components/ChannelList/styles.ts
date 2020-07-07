import styled from "styled-components";
import { Add } from "styled-icons/material"

export const Container = styled.div`
grid-area: CL ;
display:flex; /* Vou separar os dois elementos  */
flex-direction: column;

padding: 24px 10px 0px 16px;
background-color: var(--secondary);
`;

export const Category = styled.div`
display:flex;
align-items:center;
justify-content:space-between;/* Deixando eles nas extremidades */
color:var(--gray);

margin-bottom:6px;

box-shadow: rgba(0,0,0,0.2) 0px 1px 0px 0px;

>span{
  text-transform:uppercase;
  font-size:12px;
  font-weight:500px;
  color:var(--gray);
}



`;
export const AddCategoryIcon = styled(Add)`
width:21px;
height:21px;
color:var(--symbol);

cursor:pointer;
`;