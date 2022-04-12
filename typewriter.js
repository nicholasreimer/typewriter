
const sentence = "hello there from lighthouse labs";

let index = 0;

for (const char of sentence) {

  setTimeout(() => {
    console.log(char);
  }, index
  );

  index += 50;
};

/*
STEPS:
-a new var named index is created and set equal to zero

-for of loop cycles through each individual charchter within the arg string

-for each charchter beging looped print it to the console via a setTimeout func
 and hav its time delay be equal to the current value of var index

-once you have finsihed the setTimeout func add 50 to the value of index
NOTE: this creates 50ms delay between the printing of each charchter AFTER
the first charchter in the string (since index starts as being equal to 0)
*/