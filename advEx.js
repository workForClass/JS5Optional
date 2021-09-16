// Setting up the HTML File

// 1. Link this JavaScript file to the index.html file.
// 2. Create an array of objects for 3 different animals, each property should include a property for the animal's name and number of legs.

// 3.  Select the ul element using JS

// 4. Use a for loop to run through the entire animals array. On each iteration, it should do the following:
// a ) Create a template literal that contains the animal's two property values
// b) Using document createElement, creates a list item and changes its inner html to the string
// c) Append the newly created list element to the ul we selected in step 3
// d) Check your browser. You should have three list items, but they don't have any ids! In the for loop, after we create the list item, make sure we give them a unique id. Make sure any changes are done before you append the element.

// e) BONUS! Add an event listener to each of the list items inside the for loop, BEFORE you append the list item. The event listener should:
// a. take in an event parameter and check the event's target.
// b. Using the target, it should change the target's text color to red.
// c. BONUS BONUS : How can we make sure that clicking it twice will make the red go away?
