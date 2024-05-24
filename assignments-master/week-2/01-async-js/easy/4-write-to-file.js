// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

let fs = require('fs');

data='Hi Adarsh how do you do'
fs.writeFile("/Users/adarsh/Desktop/projects/100xDev/assignments-master/week-2/01-async-js/easy/b.txt", data,{ flag: 'a+' },err=>{
    if (err) {
        console.error(err);
      } else {
        // file written successfully
      }
});
