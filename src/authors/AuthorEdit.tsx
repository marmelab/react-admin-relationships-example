import {
  DateInput,
  Edit,
  SimpleForm,
  TextInput,
  SimpleFormIterator,
  NumberInput,
} from "react-admin";
import { ReferenceManyInput } from "@react-admin/ra-relationships";

export const AuthorEdit = () => (
  <Edit mutationMode="optimistic">
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="first_name" />
      <TextInput source="last_name" />
      <DateInput source="date_of_birth" />
      <ReferenceManyInput reference="books" target="author_id">
        <SimpleFormIterator inline disableReordering>
          <TextInput source="title" />
          <NumberInput source="year" />
        </SimpleFormIterator>
      </ReferenceManyInput>
    </SimpleForm>
  </Edit>
);
