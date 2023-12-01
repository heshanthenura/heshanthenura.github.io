fetch("/data/portfolio.json")
  .then((response) => response.json())
  .then((data) => {
    const portfolioWrap = document.getElementById("portfolioWrap");

    // Check if 'portfolio' array exists in the data
    if (data && Array.isArray(data.portfolio)) {
      // Iterate through each portfolio item
      data.portfolio.forEach((portfolioItem) => {
        const portfolioCard = document.createElement("div");
        portfolioCard.classList.add("portfolio-card");

        const title = document.createElement("h1");
        title.classList.add("card-title");
        title.textContent = portfolioItem.title;

        const tags = document.createElement("div");
        tags.classList.add("card-tags");
        portfolioItem.tags.forEach((tag) => {
          const tagElement = document.createElement("div");
          tagElement.classList.add("card-tag");
          tagElement.textContent = tag;
          tags.appendChild(tagElement);
        });

        const description = document.createElement("p");
        description.classList.add("card-description");
        description.textContent = portfolioItem.description;

        const sourceLink = document.createElement("a");
        sourceLink.setAttribute("href", portfolioItem.sourceLink);
        sourceLink.setAttribute("target", "_blank");
        sourceLink.textContent = "Source";

        const downloadLink = document.createElement("a");
        downloadLink.setAttribute("href", portfolioItem.downloadLink);
        downloadLink.setAttribute("target", "_blank");
        downloadLink.textContent = "Download";

        const buttons = document.createElement("div");
        buttons.classList.add("card-buttons");
        buttons.appendChild(sourceLink);
        buttons.appendChild(downloadLink);

        portfolioCard.appendChild(title);
        portfolioCard.appendChild(tags);
        portfolioCard.appendChild(description);
        portfolioCard.appendChild(buttons);

        portfolioWrap.appendChild(portfolioCard);
      });
    } else {
      console.error("Portfolio data is missing or not in the expected format.");
    }
  })
  .catch((error) => console.log(error));

  const resizeTitle = () => {
    const cards = document.querySelectorAll(".portfolio-card");

    cards.forEach((card) => {
      const title = card.querySelector(".card-title");
      const containerWidth = card.clientWidth;
      let fontSize = 30; // Starting font size, you can adjust this as needed

      title.style.fontSize = fontSize + "px"; // Set initial font size

      while (title.scrollWidth > containerWidth) {
        fontSize -= 1;
        title.style.fontSize = fontSize + "px";
      }
    });
  };

  // Call the function when the window is resized
  window.addEventListener("resize", resizeTitle);

  // Initial call to resize titles on page load
  window.onload = resizeTitle;
