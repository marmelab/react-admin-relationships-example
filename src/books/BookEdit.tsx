import {
  Edit,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
  AutocompleteArrayInput,
} from "react-admin";
import { ReferenceManyToManyInput } from "@react-admin/ra-relationships";

export const BookEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="title" />
      <ReferenceInput source="author_id" reference="authors" />
      <NumberInput source="year" />
      <ReferenceManyToManyInput
        reference="collections"
        through="books_collections"
        using="book_id,collection_id"
      >
        <AutocompleteArrayInput label="Collections" optionText="name" />
      </ReferenceManyToManyInput>
    </SimpleForm>
  </Edit>
);
