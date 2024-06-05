import firestore from "../Firebase";
import { collection, getDocs } from "firebase/firestore";

export const getStoreItemsLoader = async () => {
  try {
    const storeItemsCollection = collection(firestore, "storeItems");
    const storeItemsSnapshot = await getDocs(storeItemsCollection);
    const storeItems = storeItemsSnapshot.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
      description: doc.data().description,
    }));
    return storeItems;
  } catch (error) {
    console.error("Error fetching store items: ", error);
    throw error;
  }
};
