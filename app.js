//Selecting H5 and button
let relation = document.querySelector("h5");
let btn = document.querySelector("#add");

//check is initially 0 to add if else function
let check = 0;

btn.addEventListener("click", function () {
  //here if will be true to run this command
  if (check == 0) {
    // console.log("button is clicked");  //can remove this line
    relation.style.color = "green";
    relation.innerHTML = "Friends";
    btn.innerHTML = "Remove Friend";
    //here value of check changed to 1 which means else function will execute
    check = 1;
  } else {
    relation.style.color = "red";
    relation.innerHTML = "Stranger";
    btn.innerHTML = "Add Friend";
    //here check value changes to initial to run if function
    check = 0;
  }
});
