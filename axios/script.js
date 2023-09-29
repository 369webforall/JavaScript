const getData = async () => {
  let response = await axios.get('https://dummyjson.com/products');

  console.log(response.data.products);

  //   let data = await response.json();
  //   console.log(data.products);
};

getData();
