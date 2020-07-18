import React from "react";
/*Typescript exportamos diferente do JS

export default function Layout (){ return <div> Oi mundo </div>}; */

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";
import ChannelMessage from '../ChannelMensage';


const ChannelData: React.FC = () => {
  return (
    <Container>
      <Messages>
        <ChannelMessage
          author="Chewbacca"
          date='18/11/1977'
          content='RRRAARRWHHGWWR'
        />
      </Messages>

      <InputWrapper>

        <Input>
          <InputIcon />
        </Input>


      </InputWrapper>



    </Container>

  );
};

export default ChannelData;