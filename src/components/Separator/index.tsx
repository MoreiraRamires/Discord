import React from "react";
import { SeparatorImg } from "./styles";
import Sabre from "../../assents/sabre.png";



const Separator: React.FC = () => {
  return (

    <SeparatorImg>
      <img src={Sabre} alt="Sabre de Luz" />


    </SeparatorImg>
  )
};


export default Separator;