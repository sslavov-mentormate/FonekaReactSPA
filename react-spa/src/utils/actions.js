import { addDoc, collection } from "firebase/firestore";
import firestore from "../Firebase";
import { redirect } from "react-router-dom";

export const addItemAction = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const description = formData.get("description");

  try {
    const newItem = { name, description };
    await addDoc(collection(firestore, "storeItems"), newItem);
    return redirect("/items");
  } catch (error) {
    console.error(error);
    throw error;
  }
};
