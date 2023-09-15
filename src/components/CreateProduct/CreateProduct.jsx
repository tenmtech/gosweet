import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ImageField,
  ImageInput,
} from "react-admin";

const CreateProduct = () => {
  return (
    <Create title="Creaza un produs nou" className="flex">
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="name" />
        <ImageInput source="url" label="Related pictures" accept="image/*">
          <ImageField record="" source="url" title="title" />
        </ImageInput>
        <TextInput multiline source="description" />
      </SimpleForm>
    </Create>
  );
};

export default CreateProduct;
