import { DateInput, Edit, SimpleForm, TextInput } from "react-admin";

export const AuthorEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="first_name" />
      <TextInput source="last_name" />
      <DateInput source="date_of_birth" />
    </SimpleForm>
  </Edit>
);
