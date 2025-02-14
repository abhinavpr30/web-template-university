var x = false;
function menubtn() {
  if (x == false) {
    // document.querySelector(".check").checked = true;
    document.querySelector(".ul").classList.add("list");

    x = true;
  } else {
    // document.querySelector(".check").checked = false;
    document.querySelector(".ul").classList.remove("list");
    x = false;
  }
}
