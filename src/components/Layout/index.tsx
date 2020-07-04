import React from "react";
/*Typescript exportamos diferente do JS

export default function Layout (){ return <div> Oi mundo </div>}; */

import { Grid } from "./styles"
import ServerList from "../ServerList"


const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
    </Grid>

  );
};

export default Layout;