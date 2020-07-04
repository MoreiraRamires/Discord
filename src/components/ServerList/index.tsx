import React from "react";
import { Container } from "./styles";
import ServerButton from "../ServerBotton";
import Separator from "../Separator";


const ServerList: React.FC = () => {
  return (

    <Container>


      <ServerButton isHome />

      <Separator />

      < ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />

      < ServerButton />
      <ServerButton />
      < ServerButton />

      < ServerButton />
      <ServerButton />
      < ServerButton />

      <ServerButton />
      < ServerButton />
      <ServerButton />



    </Container>


  )

};

export default ServerList;