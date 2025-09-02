
//......অবজেক্ট সাজানো (Object Sorting)....//

let students = [ 
    { name: "Sumaya", age: 22 }, 
    { name: "Sweety", age: 25 }, 
    { name: "Shanta", age: 20 }  
    ];
    students.sort((a, b) => a.age - b.age);
    console.log(students);
