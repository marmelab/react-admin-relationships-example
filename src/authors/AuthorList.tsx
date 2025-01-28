import {
  Datagrid,
  DateField,
  List,
  ReferenceManyCount,
  TextField,
} from "react-admin";

export const AuthorList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="first_name" />
      <TextField source="last_name" />
      <DateField source="date_of_birth" />
      <ReferenceManyCount reference="books" target="author_id" label="Books" />
    </Datagrid>
  </List>
);
