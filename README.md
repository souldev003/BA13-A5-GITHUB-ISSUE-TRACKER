    - 1️⃣ What is the difference between var, let, and const?
    Ans-1: var: If we declare any variable with var we can redeclare it like that,
    var name = "Mehrab";
    var name = "Maruf";

    it's very confusing when we declare any variable using var so we should not use var. But we need it sometimes.

    let: we can redeclare any variable if we use let like that:
    let name = "Mehrab";
    name = "Mehrab";
    it's helps us when we need to change any variable data using loops.

    const: we can't redeclare a variable which declared with const. ex:
    const name = "Mehrab";
    name = "Maruf" // error.
    - 2️⃣ What is the spread operator (...)?
    Ans-2: spread operator is a operator that spared all the data inside an object or array.
    - 3️⃣ What is the difference between map(), filter(), and forEach()?
    Ans-3: map() method is for transform elements into an array for we can apply condition all the elements.
    filter() methods for filter conditional value from an array or object and create new array.
    forEach() methods execute a function each element.
    - 4️⃣ What is an arrow function?
    Ans-4: Arrow function is modern from of function. ex:
    function myFunction () {
      console.log('hello')
    };

    const myFunction = () => {
      console.log('hello')
    };

    - 5️⃣ What are template literals?
    Ans-5: Template literals is a javaScript feature that's helps multiline string and it's also helps to write dynamic variable.
