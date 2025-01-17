import {
  Datagrid,
  DateField,
  Labeled,
  ListContextProvider,
  NumberField,
  ReferenceField,
  ResourceContextProvider,
  Show,
  SimpleShowLayout,
  TextField,
  useGetList,
  useList,
} from "react-admin";
import { useParams } from "react-router-dom";

export const AuthorShow = () => {
  const { id: author_id } = useParams<"id">();
  const {
    data: books,
    error,
    isPending,
  } = useGetList(
    "books",
    { filter: { author_id }, pagination: { page: 1, perPage: 100 } },
    { enabled: !!author_id },
  );
  const booksListContext = useList({ data: books, error, isPending });

  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="first_name" />
        <TextField source="last_name" />
        <DateField source="date_of_birth" />
        <Labeled label="Books by this author" fullWidth>
          <ResourceContextProvider value="books">
            <ListContextProvider value={booksListContext}>
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
            </ListContextProvider>
          </ResourceContextProvider>
        </Labeled>
      </SimpleShowLayout>
    </Show>
  );
};
