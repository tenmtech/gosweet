import React from "react";
import { Admin, Resource } from "react-admin";
import ProductList from "../components/ProductList/ProductList";
import CreateProduct from "../components/CreateProduct/CreateProduct";
import EditProduct from "../components/EditProduct/EditProduct";
import myDataProvider from "../components/CustomDataProvider/CustomDataProvider";

const adminsweet = () => {
  console.log(myDataProvider);
  return (
    <div>
      <Admin basename="/admin" dataProvider={myDataProvider}>
        <Resource
          name="cake"
          list={ProductList}
          create={CreateProduct}
          edit={EditProduct}
        />
        <Resource
          name="pancake"
          list={ProductList}
          create={CreateProduct}
          edit={EditProduct}
        />
        <Resource
          name="pastry"
          list={ProductList}
          create={CreateProduct}
          edit={EditProduct}
        />
      </Admin>
    </div>
  );
};

export default adminsweet;
