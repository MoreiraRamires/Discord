import React from "react";
/*Typescript exportamos diferente do JS

export default function Layout (){ return <div> Oi mundo </div>}; */

import { Container, Role, User, Avatar } from "./styles"

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar />
      <strong>{nickname}</strong>
      {isBot && <span> Android</span>}
    </User>
  )
}
const UserList: React.FC = () => {
  return (
    <Container>
      <Role> Prontos para a Batalha  </Role>
      <UserRow nickname="Guilherme Rodz" />
      <Role> Indisponíveis  </Role>
      <UserRow nickname="C3PO" isBot />
      <UserRow nickname="Chewbacca" />
      <UserRow nickname="Han Solo" />


    </Container>

  );
};

export default UserList;