import {
  Edit,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const BookEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="title" />
      <ReferenceInput source="author_id" reference="authors" />
      <NumberInput source="year" />
    </SimpleForm>
  </Edit>
);
