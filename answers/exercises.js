//Setting up the html file
// 1. Link this JavaScript file to the index.html file.
// 2. Inside the HTML file, add an id attribute equal to 'mainContent' to the main tag.

//Getting into our JavaScript code
// 3. select the mainContent element using a JS Document selector and assign it to a variable.
let mainSelected = document.querySelector("#mainContent");
// 4. console.log the variable, open and inspect the html file in the browser console to ensure you have selected the right element
console.log(mainSelected);
//5. Using the variable, change the width of the element to 100% and height to 100vh using the JS DOM style property.
mainSelected.style.width = "100%";
mainSelected.style.height = "100vh";
// 6. Using JS, change the background color of the element to lightblue.
mainSelected.style.backgroundColor = "lightblue";
// 7. Add an event listener to this element that looks for a user to click the div. Check it's working by adding a console log inside it.
mainSelected.addEventListener("click", function () {
  console.log("I work!");
  mainSelected.style.backgroundColor = "yellow";
  mainSelected.style.innerHTML = "I'm feeling yellow!";
});
// 8. On click, the element's background color should change to yellow
// 9. On click, the element's inner html text should change to I'm feeling yellow!

// More challenging
let newElement = document.createElement("div");
newElement.innerHTML = `<div style="width: 100px; height: 100px; background-color: red" id="new"> I am a smaller box </div>`;
// 10. Using the above variable, append the following template string to the main element. Remember, to target the main element, you can use the selector you were using above.
mainSelected.appendChild(newElement);
// 11. Select this above appended element using its id, new and assign it to a variable.
let newlyAddedEl = document.querySelector("#new");
// 12. Add an event listener. On click, the handler should take in the event as a parameter. Console.log the event.target after the user clicks.
newlyAddedEl.addEventListener("click", function (event) {
  console.log(event.target);
});
// 13. Open the index.html file and check that the browser console has logged the small box, not our big main box, and only when we click it.

// 14. If you want more of a challenge, how would you apply the above 'style' tag in the template literal to an empty appended div box, using a css class?
