const regModal = document.querySelector("#reg-modal"),
  regModalClose = document.querySelector(".modal-close");

function dynamicOpenModal(selector) {
  const modal = document.querySelector(selector);
  if (modal) {
    modal.classList.add("open");

    regModalClose.addEventListener("click", () => {
      dynamicClosemodal(selector);
    });
  }
}

function dynamicClosemodal(selector) {
  const modal = document.querySelector(selector);
  if (modal) {
    modal.classList.remove("open");
  }
}

regModal.addEventListener("click", () => {
  dynamicOpenModal("#registration-modal");
});

const editModal = document.querySelector(".f-button"),
  editModalClose = document.querySelector(".edit-close");

editModal.addEventListener("click", () => {
  dynamicOpenModal("#edit-modal");
}); // მეორე მოდალის X ღილაკზე არ იმუშავა რატომღაც დახურვამ

editModalClose.addEventListener("click", () => {
  const secondModal = document.querySelector("#edit-modal");
  secondModal.classList.remove("open");
});
