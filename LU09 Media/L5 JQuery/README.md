# Extra Lecture JQuery

I have talked about JQuery a bit in class.
But I wanted to have a smaller example of it in action.

- [JQuery](https://jquery.com/)
- [JQuery W3Schools](https://www.w3schools.com/jquery/)
- [JQuery in 100s](https://www.youtube.com/watch?v=UU-GebNqdbg)

## History of Frameworks

JQuery is a JavaScript library that was created to simplify the process of traversing HTML documents, handling events, and creating animations. It was first released in 2006 and quickly gained popularity due to its ease of use and cross-browser compatibility.

With the rise of modern JavaScript frameworks like React, Angular, and Vue.js, the use of JQuery has declined in recent years. However, it is still widely used in many legacy projects and can be a useful tool for quickly adding interactivity to web pages.

With vanilla JavaScript becoming more powerful and easier to use, many developers have moved away from using JQuery in favor of native JavaScript or modern frameworks. However, JQuery remains a popular choice for many developers due to its simplicity and ease of use.

## Adding JQuery to your project

At the end of the day, JQuery is just a bunch of JavaScript functions someone else wrote for you. So all you need to do is include the JQuery library in your project.
You can do it two ways.

1. Downloading the `.js` file and including it in your project.
2. Using a CDN (Content Delivery Network) to include the library in your project.
    - Meaning the user's browser will download the library from a server on the internet instead of your own server.
    - This is the preferred method because it can improve page load times and reduce server load.
    - But if the CDN goes down, your site will break.

[Download JQuery](https://jquery.com/download/)
[CDN JQuery](https://releases.jquery.com/)

```html
<!-- Minified JQuery -->
<script src="https://code.jquery.com/jquery-4.0.0.min.js"></script>
<!-- Your own JavaScript -->
<script src="your-script.js"></script>
```
