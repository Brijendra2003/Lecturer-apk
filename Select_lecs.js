const selectedItems = [];

      document.addEventListener("DOMContentLoaded", function () {
        const items = document.querySelectorAll(".item");

        const myButton = document.getElementById("myButton");

        myButton.disabled = true; // Disable the button by default

        items.forEach(function (item) {
          item.addEventListener("click", function () {
            // Toggle selection state
            if (selectedItems.includes(this)) {
              // Deselect item
              const index = selectedItems.indexOf(this);
              selectedItems.splice(index, 1);
              this.classList.remove("selected");
            } else {
              // Select item
              selectedItems.push(this);
              this.classList.add("selected");
            }
            // Enable the button if any item is selected
            myButton.disabled = selectedItems.length === 0;
          });
        });
      });

      function navigateToTargetPage() {
        const selectedItemsData = selectedItems.map((item) => ({
          content: item.innerHTML, // Store the innerHTML content of selected items
        }));
        sessionStorage.setItem(
          "selectedItemsData",
          JSON.stringify(selectedItemsData)
        );
        window.location.href = "proceed.html";
      }

      document
        .getElementById("backButton")
        .addEventListener("click", function () {
          window.history.back();
        });