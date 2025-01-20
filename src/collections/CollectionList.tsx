import { Datagrid, List, TextField } from "react-admin";

export const CollectionList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="type" />
    </Datagrid>
  </List>
);
