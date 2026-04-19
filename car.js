import { db } from "./firebase.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

async function loadCar() {
  const ref = doc(db, "cars", id);
  const snap = await getDoc(ref);

  if (snap.exists()) {
    const car = snap.data();

    document.getElementById("title").innerText = car.title;
    document.getElementById("price").innerText = "$" + car.price_cr;
    document.getElementById("desc").innerText = car.description;
    document.getElementById("img").src = car.images[0];

    document.getElementById("buyBtn").href =
      `contact.html?car=${id}&name=${encodeURIComponent(car.title)}`;
  }
}

loadCar();
