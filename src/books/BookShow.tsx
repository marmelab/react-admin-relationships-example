import {
  NumberField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
  SingleFieldList,
  ChipField,
} from "react-admin";
import { ReferenceManyToManyField } from "@react-admin/ra-relationships";

export const BookShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" />
      <ReferenceField source="author_id" reference="authors" />
      <NumberField source="year" />
      <ReferenceManyToManyField
        reference="collections"
        through="books_collections"
        using="book_id,collection_id"
        label="Collections"
      >
        <SingleFieldList linkType="show">
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceManyToManyField>
    </SimpleShowLayout>
  </Show>
);
