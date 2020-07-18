import React from "react";
/*Typescript exportamos diferente do JS

export default function Layout (){ return <div> Oi mundo </div>}; */

import { Container, Role, User, Avatar } from "./styles"

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "Android" : ''} />
      <strong>{nickname}</strong>

      {isBot && <span> Android </span>}
    </User>
  );
};
const UserList: React.FC = () => {
  return (
    <Container>
      <Role> Prontos para a Batalha  </Role>
      <UserRow nickname="Luke Skywalker" />

      <Role> Indisponíveis  </Role>
      <UserRow nickname="C3PO" isBot />
      <UserRow nickname="Chewbacca" />
      <UserRow nickname="Han Solo" />
      <UserRow nickname="Chewbacca" />
      <UserRow nickname="Han Solo" />
      <UserRow nickname="Chewbacca" />
      <UserRow nickname="Han Solo" />
      <UserRow nickname="Chewbacca" />
      <UserRow nickname="Han Solo" />
      <UserRow nickname="Chewbacca" />
      <UserRow nickname="Han Solo" />
      <UserRow nickname="C3PO" isBot />
      <UserRow nickname="C3PO" isBot />
      <UserRow nickname="Chewbacca" />





    </Container>

  );
};

export default UserList;