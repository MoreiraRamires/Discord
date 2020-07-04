import styled from "styled-components";



export const Container = styled.div`
grid-area: SL; /*  Esse meu container é o SL que atribui no Index.ts */

display:flex;
flex-direction:column;
align-items:center;


background-color:var(--tertiary);;
padding:11px 0px;

height:100vh;
overflow-y:scroll;

::-webkit-scrollbar{
  display:none;/* scrollbar vai ficar invisivel*/
}



`;

export const Separator = styled.div`
width:32px;
border-bottom:2px solid var(--quaternary); ;

`;