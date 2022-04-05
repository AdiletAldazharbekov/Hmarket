import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyDLdWVXHJhu_EvXQogvsGVrq_TJpGZCLYc",
	authDomain: "hmarket-6816d.firebaseapp.com",
	projectId: "hmarket-6816d",
	storageBucket: "hmarket-6816d.appspot.com",
	messagingSenderId: "368694824716",
	appId: "1:368694824716:web:c63832091bcc8298b74329",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
