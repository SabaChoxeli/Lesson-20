const regModal = document.querySelector("#reg-modal"),
  regModalClose = document.querySelector(".modal-close");

function dynamicOpenModal(selector) {
  const modal = document.querySelector(selector);
  if (modal) {
    modal.classList.add("open");

    regModalClose.addEventListener("click", () => {
      dynamicClosemodal(selector);
    });

    editModalClose.addEventListener("click", () => {
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
});

// editModalClose.addEventListener("click", () => {
//   const secondModal = document.querySelector("#edit-modal");
//   secondModal.classList.remove("open");
// });

const regForm = document.querySelector("#form"),
  userName = document.querySelector("#name"),
  userSurname = document.querySelector("#surname"),
  userEmail = document.querySelector("#email"),
  userPersonalID = document.querySelector("#personal-id"),
  userPhone = document.querySelector("#mobile-number"),
  userZip = document.querySelector("#zip"),
  userGender = document.querySelector("#gender"),
  userID = document.querySelector("#user_id");

regForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userData = {
    id: userID.value,
    first_name: userName.value,
    last_name: userSurname.value,
    phone: userPhone.value,
    id_number: userPersonalID.value,
    email: userEmail.value,
    gender: userGender.value,
    zip_code: userZip.value,
  };
  regForm.reset();
});
