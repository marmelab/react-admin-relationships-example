import { Admin, Resource } from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import books from "./books";
import authors from "./authors";

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource {...books} />
    <Resource {...authors} />
  </Admin>
);
