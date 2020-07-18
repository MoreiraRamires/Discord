import styled from "styled-components";


export const Container = styled.div`
grid-area: UL;
display:flex;
flex-direction: column;

padding: 3px  6px 0 16px;
background-color:var(--tertiary);

max-height:calc(100vh - 46px);


/* Add Scroll e configurando a  */

overflow-y:scroll;
::-webkit-scrollbar{
  width:4px;

}

::-webkit-scrollbar-thumb{
  background-color: var(--tertiary);
  border-radius:5px;

}
::-webkit-scrollbar-track{
  background-color: var(--secondary);

}

 `;
export const Role = styled.span`
margin-top:20px;
text-transform:uppercase;
font-size:12px;
color: var(--gray);
font-weight:500;


`;
export const User = styled.div`
display:flex;
margin-top:5px;
padding:5px;
border-radius:5px;

cursor:pointer;
background:transparent;
transition: background .2s;
&:hover{
  background: rgba( 255,255,255,0.1);
};

>strong{
  margin-left:13px;
  font-weight:500;
  color:var(--white); 
  opacity:0.7;

/* Não irá quebrar a linha */
  white-space:nowrap;
  /* Nomes grandes ficarão com reticencias */
  text-overflow:ellipsis;
  /* O que passar para fora da tela não vai aparecer */
  overflow:hidden;
}

>span{
  margin-left:9px;
  background-color: var(--discord);
  color: var(--white);
  padding:4px 5px;
  border-radius:4px;

  text-transform:uppercase;
  font-weight:bold;
  font-size:11px;
}



`;
export const Avatar = styled.div`
/* Para o avatar não ficar esmagado */
flex-shrink:0;

width:32px;
height:32px;

background: var(--primary);
border-radius:50%;

&.bot{
  background-color: var(--mention-detail)
}

`;