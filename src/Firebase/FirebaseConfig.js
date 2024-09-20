import { initializeApp } from "firebase/app";
const fireBaseConfig = {
 apiKey: import.meta.env.VITE_APIKEY,
 authDomain: import.meta.env.VITE_AUTHDOMAIN,
 projectId: import.meta.env.VITE_PROJECTID,
 storageBucket: import.meta.env.VITE_STORAGEBUCKET,
 messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
 appId: import.meta.env.VITE_APPID
};
const app = initializeApp(fireBaseConfig);

export default app;