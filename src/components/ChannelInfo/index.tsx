import React from "react";
/*Typescript exportamos diferente do JS

export default function Layout (){ return <div> Oi mundo </div>}; */

import { HastagIcon, Title, Separator, Description, Container } from "./styles"


const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HastagIcon />
      <Title > ChatLivre</Title>
      <Separator />
      <Description> Canal aberto para conversas</Description>


    </Container>

  );
};

export default ChannelInfo;