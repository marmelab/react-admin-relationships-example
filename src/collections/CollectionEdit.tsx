import { Edit, SimpleForm, TextInput } from "react-admin";
import {
  ReferenceManyToManyInput,
  DualListInput,
} from "@react-admin/ra-relationships";

export const CollectionEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="type" />
      <ReferenceManyToManyInput
        reference="books"
        through="books_collections"
        using="collection_id,book_id"
      >
        <DualListInput label="Books" optionText="title" />
      </ReferenceManyToManyInput>
    </SimpleForm>
  </Edit>
);
