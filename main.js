let list = [
  "Hello this is my first Todo.",
  "Hello this is my second Todo.",
  "Hello this is my 3th Todo.",
];

document.getElementById("btnadd").addEventListener("click", () => {
  let inputValue = document.getElementById("get").value;
  if (inputValue.trim() !== "") {
    list.push(inputValue);
    createListElem(list);
  } else {
    alert("Enter somthing");
  }
});

document.getElementById("mobilebtnadd").addEventListener("click", () => {
  let inputValue = document.getElementById("get").value;
  if (inputValue.trim() !== "") {
    list.push(inputValue);
    createListElem(list);
  } else {
    alert("Enter somthing");
  }
});

const createListElem = (_list) => {
  let listElem = "";
  _list.map((el, i) => {
    listElem += `<div class="onelist"><div>${el} </div><button class="xbtn"  onclick="removeElem('${i}')"><img src="./Group 1.png" alt="" /></button></div>`;
  });
  document.getElementById("list").innerHTML = listElem;
  let countElem = list.length;
  document.getElementById("count").innerHTML = countElem;
};

createListElem(list);
const removeElem = (index) => {
  list.splice(index, 1);
  createListElem(list);
};
