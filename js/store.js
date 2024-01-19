document.addEventListener("DOMContentLoaded", () => {
    const storeCardsContainer = document.querySelector(".store-card-container");
  
    fetch("assets/store.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("done");
        data.store.forEach((item) => {
          console.log(item.title);
  
          const card = document.createElement("div");
          card.classList.add("store-card");
          card.innerHTML = `
            <h1 class="card-title">${item.title}</h1>
            <p class="description">${item.description}</p>
            <div class="btns">
              ${
                item.gi
                  ? `<a href="${item.github}" target="_blank"><ion-icon name="logo-github"></ion-icon></a>`
                  : ""
              }
              ${
                item.wi
                  ? `<a href="${item.windows}" target="_blank"><ion-icon name="logo-windows"></ion-icon></a>`
                  : ""
              }
              ${
                item.li
                  ? `<a href="${item.linux}" target="_blank"><ion-icon name="logo-tux"></ion-icon></a>`
                  : ""
              }
              ${
                item.mi
                  ? `<a href="${item.mac}" target="_blank"><ion-icon name="logo-apple"></ion-icon></a>`
                  : ""
              }
            </div>
          `;
          storeCardsContainer.appendChild(card);
        });
      })
      .catch((error) => {
        console.error("Error fetching store.json:", error);
      });
  });
  