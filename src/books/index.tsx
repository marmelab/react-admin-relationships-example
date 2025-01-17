import { ResourceProps } from "react-admin";
import { BookList } from "./BookList";
import { BookShow } from "./BookShow";
import { BookEdit } from "./BookEdit";

const books: ResourceProps = {
  name: "books",
  list: BookList,
  edit: BookEdit,
  show: BookShow,
};

export default books;
