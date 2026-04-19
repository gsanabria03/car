import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const form = document.getElementById("carForm");
const container = document.getElementById("adminCars");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  await addDoc(collection(db, "cars"), {
    title: title.value,
    price_cr: Number(price_cr.value),
    price_us: Number(price_us.value),
    description: desc.value,
    images: [image.value],
    status: "available",
    createdAt: new Date()
  });

  alert("Carro agregado");
  location.reload();
});

async function loadAdminCars() {
  const snapshot = await getDocs(collection(db, "cars"));

  snapshot.forEach(d => {
    const car = d.data();

    const div = document.createElement("div");

    div.innerHTML = `
      <h3>${car.title}</h3>
      <p>${car.status}</p>
      <button onclick="markSold('${d.id}')">Marcar SOLD</button>
    `;

    container.appendChild(div);
  });
}

window.markSold = async (id) => {
  const ref = doc(db, "cars", id);

  await updateDoc(ref, {
    status: "sold",
    soldAt: new Date()
  });

  location.reload();
};

loadAdminCars();
