import { useCallback, useMemo, useState } from "react";
import {
  AutocompleteInput,
  Edit,
  NumberInput,
  SimpleForm,
  TextInput,
  useGetList,
  useGetOne,
  useRecordContext,
} from "react-admin";
import { AutocompleteInputChangeReason } from "@mui/material";
import { keepPreviousData } from "@tanstack/react-query";
import debounce from "lodash/debounce";

const AuthorAutocompleteInput = () => {
  // Fetch the currently selected author's data
  const book = useRecordContext();
  const {
    data: currentAuthor,
    error,
    isPending,
  } = useGetOne(
    "authors",
    { id: book?.author_id },
    { enabled: !!book?.author_id },
  );

  // Fetch the (filtered) list of possible authors
  const [authorFilter, setAuthorFilter] = useState<string | undefined>(
    undefined,
  );
  const { data: authors } = useGetList(
    "authors",
    {
      pagination: { page: 1, perPage: 100 },
      filter: { q: authorFilter },
    },
    // keep previous data as placeholder data to avoid clearing the input
    // each time the filter changes
    { placeholderData: keepPreviousData },
  );

  // (Debounced) update the filter on input change
  const onInputChange = debounce(
    (
      _event: React.SyntheticEvent,
      value: string,
      reason: AutocompleteInputChangeReason,
    ) => {
      if (reason === "input") {
        setAuthorFilter(value);
      }
      if (reason === "reset" || reason === "clear") {
        setAuthorFilter(undefined);
      }
    },
    500,
  );

  // Add the current author to the list of choices if not already present
  const choices = useMemo(() => {
    if (!authors) return authors;
    if (authors?.some((author) => author.id === currentAuthor?.id)) {
      return authors;
    }
    return [...authors, currentAuthor];
  }, [authors, currentAuthor]);

  // Memoized optionText
  const optionText = useCallback(
    (author) => `${author.first_name} ${author.last_name}`,
    [],
  );

  if (error || isPending || !authors) return null;
  return (
    <AutocompleteInput
      source="author_id"
      choices={choices}
      optionText={optionText}
      onInputChange={onInputChange}
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
