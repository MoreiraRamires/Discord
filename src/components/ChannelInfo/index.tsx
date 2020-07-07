import React from "react";
/*Typescript exportamos diferente do JS

export default function Layout (){ return <div> Oi mundo </div>}; */

import { HastagIcon, Title, Separator, Description, Container } from "./styles"

import Robo from "../../assents/r2.png"


const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HastagIcon />
      <Title > ChatLivre</Title>
      <Separator> <img src={Robo} alt="R2-D2" /></Separator>
      <Description> Canal aberto para conversas</Description>


    </Container>

  );
};

export default ChannelInfo;