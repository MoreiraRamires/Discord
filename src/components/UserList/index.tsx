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
      <UserRow nickname="C3PO" isBot />
      <UserRow nickname="Chewbacca" />
      <UserRow nickname="Han Solo" />
      <UserRow nickname="Biggs" />
      <UserRow nickname="Léia" />
      <UserRow nickname="Garven Dreis " />
      <UserRow nickname="Rafael Ramires" />
      <Role> Indisponíveis  </Role>
      <UserRow nickname="Galen Erso" />
      <UserRow nickname="Jyn Erso" />
      <UserRow nickname="Obi-Wan Kenobi " />
      <UserRow nickname="Sabine Wren" />
      <UserRow nickname="Yoda" />
      <UserRow nickname="Bail Organa " />
      <UserRow nickname="George Lucas" />
      <UserRow nickname="R2D2" isBot />
      <UserRow nickname="Greedo" />
      <UserRow nickname="Owen Lars " />
      <UserRow nickname="Beru Lars" />






    </Container>

  );
};

export default UserList;