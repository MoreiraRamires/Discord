import React from "react";
/*Typescript exportamos diferente do JS

export default function Layout (){ return <div> Oi mundo </div>}; */

import { Grid } from "./styles";
import ServerList from "../ServerList";
import ServerName from "../ServerName";


const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
    </Grid>

  );
};

export default Layout;