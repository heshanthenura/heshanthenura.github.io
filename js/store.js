fetch("data/store.json")
  .then((response) => response.json())
  .then((data) => {
    const storeContent = document.getElementById("storeContent");

    // Check if 'store' property exists and it's an array
    if (data && Array.isArray(data.store)) {
      data.store.forEach((card) => {
        const storeCard = document.createElement("div");
        storeCard.classList.add("store-card");

        storeCard.innerHTML = `
          <h1 class="title">${card.title}</h1>
          <p class="desc">${card.description}</p>
          <div class="buttons">
            ${
              card.gi
                ? `<a href="${card.github}" target="_blank"><ion-icon name="logo-github"></ion-icon></a>`
                : ""
            }
            ${
              card.wi
                ? `<a href="${card.windows}" target="_blank"><ion-icon name="logo-windows"></ion-icon></a>`
                : ""
            }
            ${
              card.li
                ? `<a href="${card.linux}" target="_blank"><ion-icon name="logo-tux"></ion-icon></a>`
                : ""
            }
            ${
              card.mi
                ? `<a href="${card.mac}" target="_blank"><ion-icon name="logo-apple"></ion-icon></a>`
                : ""
            }
          </div>
        `;

        storeContent.appendChild(storeCard);
      });
    } else {
      console.error("Data is not an array:", data);
    }
  })
  .catch((error) => console.error("Error fetching data:", error));
