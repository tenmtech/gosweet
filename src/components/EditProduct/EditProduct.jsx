import React from "react";
import { SimpleForm, TextInput, FileInput, Edit, TextField } from "react-admin";

const EditProduct = () => {
  return (
    <Edit title="Creaza un produs nou" className="flex">
      <SimpleForm className="flex">
        <TextField source="id" />
        <TextInput source="name" />
        <FileInput source="url" />
        <TextInput multiline source="description" />
      </SimpleForm>
    </Edit>
  );
};

export default EditProduct;
