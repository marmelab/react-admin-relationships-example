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
};

export default authors;
