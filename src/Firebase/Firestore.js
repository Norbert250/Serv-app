import { getFirestore } from "firebase/firestore";
import app from "./FirebaseConfig";

const dataBase = getFirestore(app);

export default dataBase;