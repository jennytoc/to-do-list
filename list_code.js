document.getElementById("add").onclick = function() {
  let textInput = document.getElementById("input").value;
  // .value for input values
  let li = "<li>" + textInput + "</li";
  // Then add the input to the list!
  document.getElementById("list").appendChild(li);
}