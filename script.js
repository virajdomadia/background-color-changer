const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "grey") {
      document.body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "white") {
      document.body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "blue") {
      document.body.style.backgroundColor = e.target.id;
    } else {
      document.body.style.backgroundColor = e.target.id;
    }
  });
});
