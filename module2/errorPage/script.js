console.log("This is the error page script running.");

const refreshBtn = document.getElementById("btn");

function handleClick() {
  window.location.reload();
}

refreshBtn.addEventListener("click", handleClick);
