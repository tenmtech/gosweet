import simpleRestProvider from "ra-data-simple-rest";

const dataProvider = simpleRestProvider("http://89.33.44.24:5000/api");

const myDataProvider = {
  ...dataProvider,
  update: async (resource, params) => {
    const base64Picture = await convertFileToBase64(params.data.url);
    return dataProvider.update(resource, {
      id: params.data.id,
      data: {
        ...params.data,
        url: base64Picture,
      },
    });
  },
  create: async (resource, params) => {
    const base64Picture = await convertFileToBase64(params.data.url);
    return dataProvider.create(resource, {
      data: {
        ...params.data,
        url: base64Picture,
      },
    });
  },
};

const convertFileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;

    reader.readAsDataURL(file.rawFile);
  });

export default myDataProvider;
