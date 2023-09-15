import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ImageField,
  EditButton,
  DeleteButton,
} from "react-admin";
const ProductList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <ImageField source="url" />
        <TextField source="name" />
        <TextField source="description" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export default ProductList;
