const inputTag = document.querySelector(".form-control");
const productContainerTag =
  document.getElementsByClassName("productContainer")[0];

let productId = 1;

inputTag.addEventListener("change", (event) => {
  const productParentContainerTag = document.createElement("div");
  productParentContainerTag.classList.add("productParentContainer");

  //<i class="fa-solid fa-trash"></i>

  const productParentTag = document.createElement("div");
  productParentTag.id = productId;
  productParentTag.classList.add("productParent");
  productParentTag.addEventListener("click", () => {
    let classExist = productParentTag.classList.contains("purchased");
    if (classExist) {
      productParentTag.classList.remove("purchased");
    } else {
      productParentTag.classList.add("purchased");
    }
  });
  const spanTag = document.createElement("span");
  spanTag.classList.add("product");
  const inputTagValue = event.target.value;
  const productText = productId.toString() + ".  " + inputTagValue;
  spanTag.textContent = productText;
  productParentTag.append(spanTag);

  const trashIconTag = document.createElement("i");
  trashIconTag.classList.add("fa-solid", "fa-trash");
  trashIconTag.addEventListener("click", () => {
    productParentContainerTag.remove();
  });

  productParentContainerTag.append(productParentTag, trashIconTag);
  productContainerTag.append(productParentContainerTag);
  productId += 1;
  inputTag.value = "";
});
