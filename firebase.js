import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC1KCmfo8JGEvUG4eS9vwyggtdCyDPruKA",
  authDomain: "papeycars.firebaseapp.com",
  projectId: "papeycars",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
