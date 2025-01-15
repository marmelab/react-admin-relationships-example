import {
  Datagrid,
  List,
  NumberField,
  TextField,
  useGetOne,
  useRecordContext,
  WrapperField,
} from "react-admin";
import { Typography } from "@mui/material";

const AuthorField = () => {
  const record = useRecordContext();
  const {
    data: author,
    isPending,
    error,
  } = useGetOne(
    "authors",
    { id: record?.author_id },
    { enabled: !!record?.author_id },
  );
  if (!record || isPending || error || !author) return null;
  return (
    <Typography variant="body2">
      {author.first_name} {author.last_name}
    </Typography>
  );
};

export const BookList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <WrapperField label="Author">
        <AuthorField />
      </WrapperField>
      <NumberField source="year" />
    </Datagrid>
  </List>
);
