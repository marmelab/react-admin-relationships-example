import {
  Edit,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
  AutocompleteInput,
  AutocompleteArrayInput,
  useCreateSuggestionContext,
  useCreate,
} from "react-admin";
import { ReferenceManyToManyInput } from "@react-admin/ra-relationships";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from "@mui/material";
import React from "react";

export const BookEdit = () => (
  <Edit mutationMode="pessimistic">
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="title" />
      <ReferenceInput source="author_id" reference="authors">
        <AutocompleteInput create={<CreateAuthor />} openOnFocus={false} />
      </ReferenceInput>
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

const CreateAuthor = () => {
  const { filter, onCancel, onCreate } = useCreateSuggestionContext();
  const [firstName, setFirstName] = React.useState(filter || "");
  const [lastName, setLastName] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [create] = useCreate();

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    create(
      "authors",
      {
        data: {
          first_name: firstName,
          last_name: lastName,
          date_of_birth: dob,
        },
      },
      {
        onSuccess: (data) => {
          setFirstName("");
          setLastName("");
          setDob("");
          onCreate(data);
        },
      },
    );
  };

  return (
    <Dialog open onClose={onCancel}>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <TextField
            label="First name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            autoFocus
          />
          <TextField
            label="Last name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <TextField
            label="Date of birth"
            value={dob}
            onChange={(event) => setDob(event.target.value)}
            type="date"
            InputLabelProps={{ shrink: true }}
          />
        </DialogContent>
        <DialogActions>
          <Button type="submit">Save</Button>
          <Button onClick={onCancel}>Cancel</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};