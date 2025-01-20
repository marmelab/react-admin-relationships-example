import {
  Show,
  SimpleShowLayout,
  TextField,
  Datagrid,
  ReferenceField,
  NumberField,
} from "react-admin";
import { ReferenceManyToManyField } from "@react-admin/ra-relationships";

export const CollectionShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="type" />
      <ReferenceManyToManyField
        reference="books"
        through="books_collections"
        using="collection_id,book_id"
        label="Books"
      >
        <Datagrid bulkActionButtons={false}>
          <TextField source="id" />
          <TextField source="title" />
          <ReferenceField source="author_id" reference="authors" />
          <NumberField source="year" />
        </Datagrid>
      </ReferenceManyToManyField>
    </SimpleShowLayout>
  </Show>
);
