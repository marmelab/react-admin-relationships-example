import {
  NumberField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

export const BookShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" />
      <ReferenceField source="author_id" reference="authors" />
      <NumberField source="year" />
    </SimpleShowLayout>
  </Show>
);
