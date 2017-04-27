# tab-challange
Responsive Tab challenge
## Notes
* I am not using Sass, minifier or any other things to keep the build simple.
* all the code is in ECMA Script 5 (ES5) standard so all the browsers can understand it natively.

## Task 1
Implement an accordion component which transforms to tabs for wider screens
Demo : https://mughees-ilyas.github.io/tab-challange/Task1/index.html
Code : available under task1 folder. ( NO JAVASCRIPT WAS USED)

#### Design

### approach 1
* Simple approach would have been to have two have two different HTML DIV and show/hide divs according to screen size.
* Not using this approach because too much duplication of content.

##### approach 2
* Use Flexbox, have 1 HTML structure and use order attribute of flex to display title first
* Not using this approach as flex is not supported by IE9 and Partially supported by IE10 and we would have to use javascript to detect browser and swap/add CSS.

### approach 3
* use single HTML structure and have CSS structure that support IE9+. Anything that works on IE9 will work on all the latest browsers 
* Using this apporach we avoided using javascript (YAY).

##### Solution
* I went with Flexbox approach, as I felt it matched most of the requirements wihtout many cons.
* Too ensure it works for IE 9 also, I added some JS which is IE 9 only but will not be loaded for other browsers.
* So, my final solution is : Pure CSS for IE10 and above and other browsers and a small JS for IE 9 only.
* Note: I realize this may be more complicated than just using JS for both cases, I have done this mainly to get as close to
 the instructions as possible

## Part 2
Load the content via javascript request

### Link
Demo : https://mughees-ilyas.github.io/tab-challange/task2/index.html
Code : available under task2 folder.

### Approach
* Attach the event handlers to tabs. Load the content on click using javascript XMLHttpRequest and remove the handler 
on success case so content does not load again on each click.
