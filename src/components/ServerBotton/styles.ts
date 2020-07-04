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
    props.isHome ? 'var(--rocketseat)' : 'var(--primary)'};



position: relative; /**/
cursor: pointer;

> img{
  width: 24px;
  height: 24px;
}

&:: before{ }
&:: after{ }


transition: border - radius.2s, background - color.2s;

&.active,
&: hover{
  border-radius: 16px;
  background-color:
  ${ props => props.isHome ? "var(--rocketseat)" : "var(--discord)"};

}

`;
