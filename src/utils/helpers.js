import { axiosInstance } from "../constants";
import Notification from "./Notification";

export const createItem = async (
  requestBody,
  items,
  setLoading,
  setItems,
  close,
  url
) => {
  setLoading(true);
  try {
    let data;
    let item;
    const id = requestBody?.id;
    const clonedItems = [...items];
    const notificationText = !!id
      ? "Product updated successfully"
      : "Product created successfully";
    let values = requestBody;
    if (url === "orders") {
      const { product, volume, type } = requestBody;
      values = {
        type,
        products: [{ productId: product, volume: volume }],
      };
    }
    if (!!id) {
      data = await axiosInstance.patch(`/${url}/${id}`, values);
      if (data?.data.data) {
        item = data?.data.data;
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
    Notification("success", notificationText);
    close();
  } catch (err) {
    Notification("error", "An error occured");
    setLoading(false);
  }
};

export const deleteItem = async (id, items, setItems, url) => {
  try {
    const { data } = await axiosInstance.delete(`/${url}/${id}`);
    if (data.status === "success") {
      const filteredItems = items.filter((item) => item.id !== id);
      setItems(filteredItems);
      Notification("success", "Product deleted");
    }
  } catch (err) {
    Notification("error", "An error occured");
  }
};
