import { db } from "../../utils/firebase.js";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
  const items = [];
  const itemsRef = collection(db, "users", userId, "items");
  
  const info = await getDocs(itemsRef);

  info.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });

  return items;
}

export async function addItem(userId, item) {
  const itemsRef = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsRef, item);
  return docRef.id;
}