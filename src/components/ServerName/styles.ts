import styled from "styled-components";
import { ExpandMore } from 'styled-icons/material';

export const Container = styled.div`

display:flex; /* Vou separar os dois elementos  */
justify-content:space-between;/* Deixando eles nas extremidades */
align-items: center;/* Mesma linha horizontal  */


padding: 0px 11px 0px 16px;
background-color: var(--tertiary);
box-shadow: rgba(0,0,0,0.2) 0px 1px 0px 0px;

`;
export const Title = styled.h1`

font-size:16px;
font-weight:bold;
color: #fff;


>img{ 
  width:25px;
  height:25px;}`;

export const ExpandIcon = styled(ExpandMore)`
width:28px;
height:28px;


color:#fff;
cursor:pointer;`;
