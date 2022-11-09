import {
  collection,
  getDocs,
  query,
  startAfter,
  limit,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

// pagination operation
export const Pagination = {
  // fetch the first batch
  fetchFirstBatch: async (col, order) => {
    try {
      const data = await getDocs(
        query(collection(db, col), orderBy(order, "desc"), limit(100))
      );

      let fetchedData = [];
      let lastKey = "";
      data.forEach((doc) => {
        fetchedData.push({ ...doc.data(), docId: doc.id });
        lastKey = doc.data();
      });

      console.log("Data", fetchedData);
      return { fetchedData, lastKey };
    } catch (error) {
      console.log("Error: ", error);
    }
  },

  // to fetch the next batch of data
  fetchNextBatch: async (key, col, order) => {
    try {
      const data = await getDocs(
        query(
          collection(db, col),
          orderBy(order, "desc"),
          startAfter(key),
          limit(100)
        )
      );

      let fetchedData = [];
      let lastKey = "";
      data.forEach((doc) => {
        fetchedData.push(doc.data());
        lastKey = doc.data().dateRegistered;
      });
      console.log("NEXT: ", fetchedData);

      return { fetchedData, lastKey };
    } catch (error) {
      console.log("Error: ", error);
    }
  },
};
