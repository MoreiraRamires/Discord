import styled from "styled-components";
import { Props } from ".";

export const Button = styled.button<Props>`
  display:flex;
  align-items: center; /*Alinhamento Vertical*/
  justify-content: center;/*Alinhamento Horinzontal*/
  flex-shrink: 0; /*O botão não vai ser cumprido*/

  width:48px;
  height:48px;

  margin-bottom:8px;
  border-radius:50%;

    
    background-color: ${(props) =>
    props.isHome ? 'var(--rocketseat)' : 'var(--discord)'};
  


position: relative; /**/
cursor: pointer;

`;
