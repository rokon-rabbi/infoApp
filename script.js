const addBtn = document.getElementById("add");
const printBtn = document.getElementById("print");
const list = document.getElementById("List");
let allInfo = [];

addBtn.addEventListener("click", function () {
  let info = {};
  info.firstName = document.getElementById("fname").value;
  info.lastName = document.getElementById("lname").value;
  allInfo.push(info);
  console.log(info);
  console.log(allInfo);
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
});
printBtn.addEventListener("click", function () {
  // document.getElementById('demo').innerHTML=allInfo.;
  for (let i = 0; i < allInfo.length; i++) {
    let li = document.createElement("li");
    li.innerText = allInfo[i].firstName + " " + allInfo[i].lastName;
    list.appendChild(li);
  }
});
