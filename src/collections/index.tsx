import { ResourceProps } from "react-admin";
import { CollectionList } from "./CollectionList";
import { CollectionShow } from "./CollectionShow";

const collections: ResourceProps = {
  name: "collections",
  list: CollectionList,
  show: CollectionShow,
};

export default collections;
