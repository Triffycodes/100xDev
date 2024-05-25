// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

let fs = require('fs');

fs.readFile("/Users/adarsh/Desktop/projects/100xDev/assignments-master/week-2/01-async-js/medium/a.txt", "utf-8", function(err, data){
    data=data.split(new RegExp("\\s+")).join(" ");
    fs.writeFile("/Users/adarsh/Desktop/projects/100xDev/assignments-master/week-2/01-async-js/medium/a.txt", data, err=>{
        if (err) {
            console.error(err);
          } else {
            // file written successfully
          }
    });
});