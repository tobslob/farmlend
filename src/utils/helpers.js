import { axiosInstance } from '../constants';
import Notification from './Notification';

export const createItem = async (requestBody, items, setLoading, setItems, close, url) => {
  setLoading(true);
  try {
    let data;
    let item;
    const id = requestBody?.id;
    const clonedItems = [...items];
    const notificationText = !!id ? 'Update success' : 'Create success';
    let values = requestBody;
    if (url === 'orders') {
      const { product, volume, type } = requestBody;
      values = {
        type,
        products: [{ productId: product, volume: volume }],
      };
    }
    if (!!id) {
      data = await axiosInstance.patch(`/${url}/${id}`, values);
      if (data?.data.data) {
        item = data?.data?.data;
        const updatedItemIndex = items.findIndex((item) => item.id === id);
        clonedItems.splice(updatedItemIndex, 1, item);
        setItems(clonedItems);
      }
    } else {
      data = await axiosInstance.post(`${url}`, values);
      if (data?.data?.data) {
        item = data?.data?.data;
        clonedItems.unshift(item);
        setItems(clonedItems);
      }
    }

    setLoading(false);
    Notification('success', notificationText);
    close();
  } catch (err) {
    if (err?.response?.data?.message === 'name must be unique') {
      return Notification('error', 'Name exists');
    }

    if (err?.response?.data?.message.includes("product with ID:")) {
      return Notification('error', 'Order volume is higher than product volume')
    }
    Notification('error', 'An error occured');
    setLoading(false);
  }
};

export const deleteItem = async (id, items, setItems, url, setLoading) => {
  setLoading(true);
  axiosInstance
    .delete(`/${url}/${id}`)
    .then(({ data }) => {
      if (data.status === 'success') {
        const filteredItems = items.filter((item) => item.id !== id);
        setItems(filteredItems);
        setLoading(false);
        Notification('success', 'Item deleted');
      }
    })
    .catch((err) => {
      console.log({ err });
      setLoading(false);
      if (
        err?.response?.data.message ===
        "you can't delete a product with pending orders"
      ) {
        return Notification(
          "error",
          "You can't delete a product with pending orders"
        );
      }
    return Notification("error", "An error occured");
  });
};
