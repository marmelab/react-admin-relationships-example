import { DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const AuthorShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="first_name" />
      <TextField source="last_name" />
      <DateField source="date_of_birth" />
    </SimpleShowLayout>
  </Show>
);
