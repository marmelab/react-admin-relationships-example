import { Datagrid, DateField, List, TextField } from "react-admin";

export const AuthorList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="first_name" />
      <TextField source="last_name" />
      <DateField source="date_of_birth" />
    </Datagrid>
  </List>
);
