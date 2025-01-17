import {
  Datagrid,
  DateField,
  NumberField,
  Pagination,
  ReferenceField,
  ReferenceManyField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

export const AuthorShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="first_name" />
        <TextField source="last_name" />
        <DateField source="date_of_birth" />
        <ReferenceManyField
          label="Books by this author"
          reference="books"
          target="author_id"
          pagination={<Pagination rowsPerPageOptions={[1, 5, 10, 25]} />}
        >
          <Datagrid bulkActionButtons={false} rowClick="show">
            <TextField source="id" />
            <TextField source="title" />
            <ReferenceField
              source="author_id"
              reference="authors"
              link="show"
            />
            <NumberField source="year" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
