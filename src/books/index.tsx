import { EditGuesser, ShowGuesser, ResourceProps } from "react-admin";
import { BookList } from "./BookList";

const books: ResourceProps = {
  name: "books",
  list: BookList,
  edit: EditGuesser,
  show: ShowGuesser,
};

export default books;
