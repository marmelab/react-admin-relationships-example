import {
  Datagrid,
  List,
  NumberField,
  TextField,
  ReferenceField,
} from "react-admin";

export const BookList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <ReferenceField source="author_id" reference="authors" link="show" />
      <NumberField source="year" />
    </Datagrid>
  </List>
);
