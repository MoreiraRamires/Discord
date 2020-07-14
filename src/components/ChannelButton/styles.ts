import styled from "styled-components";
import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from "styled-icons/material";


export const Container = styled.div`
display:flex;
flex-direction:row; /* Não precisa,pq esse é o padrao do flexbox */
align-items:center;
justify-content:space-between;

cursor:pointer;
padding: 5px 3px;
border-radius:5px;
background-color:transparent;
transition: background-color .2s;

>div{
  display:flex;
  align-items:center;
}

>div span{
  font-size:15px;
  color: var(--senary);
  margin-left:5px;
}

&:hover,/* passo o mouse por cima*/
&:active /*  clico no canal*/{
  background-color:var(--quinary);
  >div span{
    color:var(--white);
  }
}


`;
export const HashtagIcon = styled(Hashtag)`
width:24px;
height:24px;
color:var(--symbol);

`;
export const InviteIcon = styled(PersonAdd)``;
export const SettingsIcon = styled(Settings)``;