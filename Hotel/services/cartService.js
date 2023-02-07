import axios from "axios";

export const getTotalPrice = (items) => {
  return items.reduce((currentValue, nextValue) => {
    return currentValue + nextValue.quantity * nextValue.price;
  }, 0);
};
export const getTotalQuantity = (items) => {
  return items.reduce((currentValue, nextValue) => {
    return currentValue + nextValue.quantity;
  }, 0);
};

export const getCart = () => {
  return axios.get("/cart");
};

export const addItemToCart = async (quantity, product) => {
  const cart = await axios.post("/cart/add", {
    title: product.title,
    price: product.price,
    bed: product.bed,
    size: product.size,
    imageUrl: product.imageUrl,
    productId: product.id,
    quantity: quantity,
  });
  console.log(cart);
};

export const removeCartItem = async ( id) => {
  const cart = await axios.delete(`/cart/${id}`);
  console.log(cart);
};

export const updateCartItem = async (id, quantity) => {
  const cart = await axios.put(`/cart/${id}`, {
    quantity: quantity,
  });
  console.log(cart);
};

export const emptyCart = async (user) => {
  const cart = await axios.delete(`/cart/${user._id}`);
  console.log(cart);
};
