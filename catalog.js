import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const container = document.getElementById("cars-container");

async function loadCars() {
  const snapshot = await getDocs(collection(db, "cars"));

  snapshot.forEach(doc => {
    const car = doc.data();

    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <img src="${car.images[0]}" />
      <h3>${car.title}</h3>
      <p>$${car.price_cr}</p>
      <p class="${car.status}">${car.status === "sold" ? "VENDIDO" : "Disponible"}</p>
      <a href="car.html?id=${doc.id}">Ver más</a>
    `;

    container.appendChild(div);
  });
}

loadCars();
