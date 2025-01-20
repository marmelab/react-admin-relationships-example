import { Admin, Resource } from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import books from "./books";
import authors from "./authors";
import books_collections from "./books_collections";
import collections from "./collections";

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource {...books} />
    <Resource {...authors} />
    <Resource {...collections} />
    <Resource {...books_collections} />
  </Admin>
);
