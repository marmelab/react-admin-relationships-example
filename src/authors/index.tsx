import { ResourceProps } from "react-admin";
import { AuthorList } from "./AuthorList";
import { AuthorShow } from "./AuthorShow";
import { AuthorEdit } from "./AuthorEdit";

const authors: ResourceProps = {
  name: "authors",
  list: AuthorList,
  edit: AuthorEdit,
  show: AuthorShow,
  recordRepresentation: (author) => `${author.first_name} ${author.last_name}`,
};

export default authors;
