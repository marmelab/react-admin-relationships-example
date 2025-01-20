import {
  Datagrid,
  List,
  TextField,
  SingleFieldList,
  ChipField,
} from "react-admin";
import { ReferenceManyToManyField } from "@react-admin/ra-relationships";

export const CollectionList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="type" />
      <ReferenceManyToManyField
        reference="books"
        through="books_collections"
        using="collection_id,book_id"
        label="Books"
      >
        <SingleFieldList>
          <ChipField source="title" />
        </SingleFieldList>
      </ReferenceManyToManyField>
    </Datagrid>
  </List>
);
