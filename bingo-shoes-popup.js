document.head.insertAdjacentHTML(
  `beforeend`,
  `
<style>
.twikpopupbox {
    display: none;
    position: fixed !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .8);
    z-index: 999999;
}

.relativepopup {
    position: absolute;
    transform: translate(50%,50%);
    right: 50%;
    bottom: 50%;
    max-width: 640px;
    max-height: 480px;
}

.popup-container {
    display: block;
    margin: auto;
    text-align: end;
}

.twikpopup {
    background-color: #FAFAFA;
    display: flex;
}

.popup-img img {
    max-width: 640px;
    max-height: 480px;
}

.exit-btn {
    background: none;
    border: none;
    font-size: 1.3rem;
    color: white;
}

@media screen and (max-width: 1080px) {
    .relativepopup {
        position: fixed;
        width: 90%;
    }
}

</style>
`
);
document.body.insertAdjacentHTML(
  "beforeend",
  `
<div class="twikpopupbox">
        <div class="relativepopup ">
            <div id="popup-container" class="popup-container">
                <button id="exit-btn" class="exit-btn">&#x2715;</button>
                <div class="twikpopup">
                    <div class="popup-img">
                        <img src="https://raw.githubusercontent.com/Omri-twik/bingo-shoes/main/bingoshoes1.jpeg" alt="popup image">
                    </div>
                </div>
            </div>
        </div>
    </div>
`
);

function openPopUp() {
  let popupCheck;
  if (!localStorage.getItem("popupCheck")) {
    setTimeout(() => {
      document.querySelector(".twikpopupbox").style.display = "block";
      document.body.style.overflow = "hidden";
      document
        .querySelector(".twikpopupbox")
        .addEventListener("click", closePopUp);
      document.querySelector("#exit-btn").addEventListener("click", closePopUp);
      localStorage.setItem("popupCheck", "true");
    }, 3000);
  }
}

function closePopUp() {
  document.querySelector(".twikpopupbox").style.display = "none";
  document
    .querySelector(".twikpopupbox")
    .removeEventListener("click", closePopUp);
  document.querySelector("#exit-btn").removeEventListener("click", closePopUp);
  document.body.style.overflow = "visible";
}

openPopUp();
