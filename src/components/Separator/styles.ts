import styled from "styled-components";

export const SeparatorImg = styled.div`
  
  display:flex;
  align-items: center; /*Alinhamento Vertical*/
  justify-content: center;/*Alinhamento Horinzontal*/
  flex-shrink: 0; /*O botão não vai ser cumprido*/
  padding:10px;

  >img{
    width:45px;
    height:45px;
  }
`;