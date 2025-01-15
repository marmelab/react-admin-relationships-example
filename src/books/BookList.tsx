import {
  Datagrid,
  List,
  NumberField,
  TextField,
  useGetOne,
  useRecordContext,
  useCreatePath,
  WrapperField,
} from "react-admin";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

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

  const createPath = useCreatePath();
  const authorShowPath = createPath({
    resource: "authors",
    id: record?.author_id,
    type: "show",
  });
  // to prevent click bubbling in a datagrid with rowClick
  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

  if (!record || isPending || error || !author) return null;

  return (
    <Typography
      variant="body2"
      component={Link}
      to={authorShowPath}
      onClick={stopPropagation}
      color="primary"
    >
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
