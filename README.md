# Promises
In this repository, I learned some of the common reasons why some code in JavaScript runs differently. 
I also learned about promises and the associated syntax, which is one way that you can manage code that runs at different times.

# Animations.js File
In this file, I created a web page with a simple animation that illustrates the effects of asynchronous code. 
This is due to the fact that *requestAnimationFrame()* is an asynchronous function that allows the browser to repaint the screen between calls to *animateDiv()*.

# asynchronous.js File
In this file, I wrote code that downloads a video from a remote server and processes it after the download completes.
_Note: Rather than actually downloading or processing the video, I used the setTimeout() function to simulate the time that it takes for downloading and processing._

# quotesMain.js and quotes.txt files
These files contain asynchronous code which complicates the order in which code is run. To understand the problem a little better, I wrote some code that reads a text file containing quotes, and then one of the quotes is randomly selected and printed out for the user. Furthermore, quotes.js uses the fs module which enables interacting with the file system.

# read-file.js file
This file has a function that returns a promise. Inside the returned promise, I wrote some code that executes fs.readFile() to read the file contents.

# quotes.js file
This file allows us to see a promise change state. This is because this file uses the *readFile()* function that I created in the read-file.js file. This new code will log the promise returned by *readFile()* two different times, a few milliseconds apart so that you can see the promise change state automatically when the asynchronous code inside the promise completes.
