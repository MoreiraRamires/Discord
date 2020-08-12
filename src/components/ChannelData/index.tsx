import React from "react";
/*Typescript exportamos diferente do JS

export default function Layout (){ return <div> Oi mundo </div>}; */

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";
import ChannelMessage, { Mention } from '../ChannelMensage';


const ChannelData: React.FC = () => {
  return (
    <Container>
      <Messages>
        <ChannelMessage
          author="Han Solo"
          date='18/11/1977'
          content='Acaba com eles garoto!'
        />

        <ChannelMessage
          author="Chewbacca"
          date='18/11/1977'
          content='RRRAARRWHHGWWR'
        />

        <ChannelMessage
          author="Princesa Leia"
          date='18/11/1977'
          content={
            <>
              <Mention> @Luke_Skywalker</Mention>, tenha cuidado.
            </>
          }
          hasMention
        />


        <ChannelMessage
          author="C3PO"
          date='18/11/1977'
          content="Oh céus!"
          isBot
        />

        <ChannelMessage
          author="Rafael Ramires"
          date='18/11/1977'
          content={
            <>
              <Mention> @Luke_Skywalker</Mention>, que a Força esteja com você
            </>
          }
          hasMention
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