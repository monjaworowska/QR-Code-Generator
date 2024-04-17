const form = document.querySelector("form"),
  spinner = document.getElementById("spinner-container"),
  image = document.querySelector(".image"),
  img = document.querySelector(".image img"),
  qrcode = document.querySelector("#qrcode");

const onGenerateSubmit = (e) => {
  e.preventDefault();
  clear();
  const url = document.getElementById("url").value;
  const size = document.getElementById("size").value;
  if (url !== "") {
    showSpinner();
    setTimeout(() => {
      hideSpinner();
      generateQRCode(url, size);
      setTimeout(() => {
        const saveUrl = qrcode.querySelector("img").src;
        createSaveBtn(saveUrl);
      }, 1000);
    }, 1000);
  }
};

const generateQRCode = (url, size) => {
  const qrcode = new QRCode("qrcode", {
    text: url,
    width: size,
    height: size,
  });
};

const hideSpinner = () => {
  spinner.style.display = "none";
};

const showSpinner = () => {
  spinner.style.display = "block";
  img.style.display = "none";
};

const clear = () => {
  qrcode.innerHTML = "";
};

const createSaveBtn = (saveUrl) => {
  const link = document.createElement("a");
  link.id = "save-link";
  link.classList = "save-link-button";
  link.href = saveUrl;
  link.download = "qrcode";
  link.innerHTML = "Save Image";
  qrcode.appendChild(link);
};

form.onsubmit = onGenerateSubmit;
