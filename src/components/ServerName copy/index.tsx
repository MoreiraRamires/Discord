import React from "react";
import FalconIcon from "../../assents/falcon.png"
/*Typescript exportamos diferente do JS

export default function Layout (){ return <div> Oi mundo </div>}; */

import { Container, Title, ExpandIcon } from "./styles"


const SeverName: React.FC = () => {
  return (
    <Container>
      <Title > <img src={FalconIcon} alt="Aliança Rebelde" />Millennium Falcon</Title>
      <ExpandIcon />

    </Container>

  );
};

export default SeverName;