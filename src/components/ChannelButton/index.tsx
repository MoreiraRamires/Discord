import React from "react";
/*Typescript exportamos diferente do JS

export default function Layout (){ return <div> Oi mundo </div>}; */

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from "./styles"


export interface Props {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({ channelName, selected }) => {
  return (
    <Container className={selected ? "active" : ""}>
      <div>
        <HashtagIcon /><span> {channelName}</span>
      </div>

      <div>
        <InviteIcon />
        <SettingsIcon />

      </div>


    </Container>

  );
};

export default ChannelButton;