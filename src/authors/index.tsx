import { EditGuesser, ResourceProps } from "react-admin";
import { AuthorList } from "./AuthorList";
import { AuthorShow } from "./AuthorShow";

const authors: ResourceProps = {
  name: "authors",
  list: AuthorList,
  edit: EditGuesser,
  show: AuthorShow,
  recordRepresentation: (author) => `${author.first_name} ${author.last_name}`,
};

export default authors;
