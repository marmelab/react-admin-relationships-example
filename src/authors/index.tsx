import {
  ListGuesser,
  EditGuesser,
  ShowGuesser,
  ResourceProps,
} from "react-admin";

const authors: ResourceProps = {
  name: "authors",
  list: ListGuesser,
  edit: EditGuesser,
  show: ShowGuesser,
  recordRepresentation: (author) => `${author.first_name} ${author.last_name}`,
};

export default authors;
