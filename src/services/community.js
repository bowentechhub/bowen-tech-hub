import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase.config";

export const addCommunityMember = async (memberData) => {
  try {
    const docRef = await addDoc(collection(db, 'community_members'), {
      ...memberData,
      createdAt: new Date(),
    });
    return docRef.id;
  } catch (error) {
    throw new Error('Error adding community member: ' + error.message);
  }
};