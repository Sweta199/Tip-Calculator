let calculate = document.querySelector("#calculate");

calculate.addEventListener("click", () => {
  let totalbill = document.querySelector("#totalbill").value;
  let tipPercent = document.querySelector("#tipPercent").value;
  let split = document.querySelector("#split").value;

  //validate
  if (totalbill === "" || tipPercent == 0 || split == 0) {
    alert("Please enter the values");
    return;
  }

  let total = (totalbill * tipPercent) / split;
  total = total.toFixed(2);
  // console.log(total);
  document.getElementById("tip").innerHTML = total;
});
