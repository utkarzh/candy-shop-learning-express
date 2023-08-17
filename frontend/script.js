const form = document.querySelector("#myform");
const title = document.querySelector("#title");
const about = document.querySelector("#about");
const quant = document.querySelector("#quant");
const resulttab = document.querySelector(".result");

//DECREASE COUNT

//POST REQUESTS
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const object = {
    title: title.value,
    about: about.value,
    quant: quant.value,
  };
  console.log(object);
  try {
    var result = await axios.post("http://localhost:3000", object);
    location.reload();
  } catch (e) {
    console.log(e);
  }
});
//DISPLAY RESULTS ;;
document.addEventListener("DOMContentLoaded", async () => {
  try {
    var result = await axios.get("http://localhost:3000");

    for (candy of result.data) {
      const element = document.createElement("div");
      console.log(candy);

      element.setAttribute("id", candy.id);
      element.innerHTML =
        "<pre>NAME:" +
        candy.title +
        " ABOUT:" +
        candy.about +
        "  QTY:" +
        candy.quant +
        "</pre>";
      for (let i = 1; i < 4; i++) {
        const button = document.createElement("button");
        button.classList = "button buy is-danger";
        button.innerText = "buy" + i;
        button.value = i;
        element.appendChild(button);
      }
      resulttab.appendChild(element);
   
    }
  } catch (error) {
    console.log(error);
  }
});

//DECREASE COUNT

resulttab.addEventListener("click", async (e) => {
  if (e.target.classList.contains("buy")) {
    try {
      await axios.patch(
        "http://localhost:3000/" + e.target.parentNode.getAttribute("id"),
        { sold: e.target.value }
      );
      location.reload();
    } catch (error) {
      console.log(err);
    }
  }
});
