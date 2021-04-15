
/* I might want to have a threshold for when the class is toggled.

Q: What counts as a n intersection?

A: An intersection is whenever a given percentage of an element is visible within the viewport.

Q: How much should be showing, to trigger an intersection (dettection)?

Threshold: 25% You wish to set the threshold low because I want the users to react as the user 
scrolling and not after they have already reached the destination. Also, since not everyone might 
have a huge screen, if you set the threshold really high, they probably cannot interact with this element */

/*
Q: In what context is the observer observing?

A: It is observing the root node: the entire page.
*/

/* null的意思是view整个document也就是整个网页*/
var options = {
    root: null,
    threshold: 0.25,
}

/*
Q: How are we going to handle intersection changes?

1) When sth starts to intersect
2) When sth ceases to intersect

Q: If it starts to intersect what do we want to do?
- Apply the active class

If it ceases to intersect what do we want to do?
- Remove the active class
*/

function intersectionHandler(entries, observer) {
    entries.forEach(entry => {
        // Each entry describes an intersection change for one observed
        // entry.isIntersecting
        if (entry.isIntersecting) {
            // add active if intersecting
            entry.target.classList.add("active");
            // get the color of the intersecting elements
            var color = entry.target.dataset.color;
            // apply color to the background of body
            document.body.style.backgroundColor = color;
        } else {
            // remove active if intersecting
            entry.target.classList.remove("active");
        }
      });
    // Now we want to know whether the element is interacting or not
}

var observer = new IntersectionObserver(intersectionHandler, options);

 var images = document.querySelectorAll("img");

/* Loop through all images, and tell the observer 
to observe each one. Below is an array method想要使用这个方法的shortcut：type out arrary */


/* 
    We need to get reference to all of our images.
*/


images.forEach((image) => {
    observer.observe(image);
});