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

&::before { 
  width:9px;
  height:9px;

  position:absolute;/*Só funciona pq na linha 22 temos a position relative*/
  left:-17px;
  top:calc(50%- 4.5px);

  background-color: var(--white);
  border-radius:50%;
  
  content:""; /*pseudos elements=> content é obrigatório ainda que vazio */
  display: ${props => (props.hasNotifications ? "inline" : "none")};



}
&::after{ 
  background-color: var(--notification);
  width:auto;
  height:16px;

  padding:0 4px;

  position: absolute;
  bottom:-4px;
  right: -4px;

  border-radius: 12px;
  border: 4px solid var(--quaternary);

  text-align:right;
  font-size:13px;
  font-weight:bold;
  color: var(--yellow);

/* (dentro da props) => verifique se há menções && add o num de menções   */
  content: " ${ (props) => props.mentions && props.mentions}";
  /* Caso tenha notificacoes ? mostrar na tela (V)  : (F) */
display: ${(props) =>
    props.mentions && props.mentions > 0 ? "inline" : "none}"
  };


transition: border - radius.2s, background - color.2s;

&.active,
&:hover{
  border-radius: 16px;
  background-color:
  ${ (props) => props.isHome ? "var(--rocketseat)" : "var(--discord)"};

}

`;
