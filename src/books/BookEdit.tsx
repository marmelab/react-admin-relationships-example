import {
  AutocompleteInput,
  Edit,
  NumberInput,
  SimpleForm,
  TextInput,
  useGetList,
} from "react-admin";

const AuthorAutocompleteInput = () => {
  const {
    data: authors,
    error,
    isPending,
  } = useGetList("authors", {
    pagination: { page: 1, perPage: 100 },
  });
  if (error || isPending) return null;
  return (
    <AutocompleteInput
      source="author_id"
      choices={authors}
      optionText={(author) => `${author.first_name} ${author.last_name}`}
    />
  );
};

export const BookEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="title" />
      <AuthorAutocompleteInput />
      <NumberInput source="year" />
    </SimpleForm>
  </Edit>
);
