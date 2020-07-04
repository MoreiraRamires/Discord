import React from "react";
import { Button } from "./styles";
import Logo from "../../assents/icons8-rebelde-50.png"

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: boolean;
};


const ServerButton: React.FC<Props> = ({ selected, isHome, hasNotifications, mentions, }) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? "active" : ""}
    >


      {isHome && <img src={Logo} alt="Aliança Rebelde" />}
    </Button>



  )
};

export default ServerButton;
