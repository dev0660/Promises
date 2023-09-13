# Promises
In this repository, I learned some of the common reasons why some code in JavaScript runs differently. 
I also learned about promises and the associated syntax, which is one way that you can manage code that runs at different times.

# Animations.js File
In this file, I created a web page with a simple animation that illustrates the effects of asynchronous code. 
This is due to the fact that *requestAnimationFrame()* is an asynchronous function that allows the browser to repaint the screen between calls to *animateDiv()*.

# asynchronous.js File
In this file, I wrote code that downloads a video from a remote server and processes it after the download completes.
_Note: Rather than actually downloading or processing the video, I used the setTimeout() function to simulate the time that it takes for downloading and processing._

# quotes.js and quotes.txt files
These files contain asynchronous code which complicates the order in which code is run. To understand the problem a little better, I wrote some code to read a text file containing quotes, then randomly select one of the quotes and print it out for the user.
