import React from "react";
/*Typescript exportamos diferente do JS

export default function Layout (){ return <div> Oi mundo </div>}; */

import { Container, AddCategoryIcon, Category } from "./styles";

const ChannelList: React.FC = () => {
  return (
    <Container>

      <Category>
        <span> Canais de Texto</span>
        <AddCategoryIcon />
      </Category>

      {/*<ChannelButton channelName="Destruir Estrela da Morte" />

      <ChannelButton channelName="Grand Prix em Tatooine" />

  <ChannelButton channelName="Matar Sith Safado LoL" />*/}

    </Container>

  );
};

export default ChannelList;