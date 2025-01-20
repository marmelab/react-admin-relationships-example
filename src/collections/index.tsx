import { ResourceProps } from "react-admin";
import { CollectionList } from "./CollectionList";
import { CollectionShow } from "./CollectionShow";
import { CollectionEdit } from "./CollectionEdit";

const collections: ResourceProps = {
  name: "collections",
  list: CollectionList,
  show: CollectionShow,
  edit: CollectionEdit,
};

export default collections;
