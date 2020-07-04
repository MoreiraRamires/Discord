import React from "react";
import { Container, Separator } from "./styles";
import ServerButton from "../ServerBotton";


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