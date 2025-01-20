import { Show, SimpleShowLayout, TextField } from "react-admin";

export const CollectionShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="type" />
    </SimpleShowLayout>
  </Show>
);
