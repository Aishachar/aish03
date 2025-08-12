const students = [

{id: 1, name: "Anit Sharma", age: 20, course: "Computer Science", marks: 85, feesPaid: true },

{id: 2, name: "Priya Singh", age: 22, course: "Information Technology", marks: 92, feesPaid: false },

{ id: 3, name: "Ravi Katar", age: 19, course: "Electronics", marks: 76, fresPaid: true }, 
{id: 4, name: "Neha Verna", age: 21, course: "Mechanical", marks: 88, feesPaid: true },
 {id: 5, name: "Sohan Lal", age: 23, course: "Civil Engineering", marks: 65, feesPaid: false }, 
 {id: 6, name: "Anjali Mehta", age: 20, course: "Computer Science", marks: 95, feesPaid: true}, 
 { id: 7, name: "Vikas Gupta", age: 22, course: "Information Technology", marks: 58, feesPaid: false },

 {id: 8, name: "Pooja Mishra", age: 19, course: "Mechanical", marks: 80, feesPaid: true },
  { id: 9, name: "Rajesh Khanna", age: 21, course: "Electronics", marks: 70, feesPaid: false },

{id: 10, name: "Sneha Kapoor", age: 22, course: "Civil Engineering", marks: 90, feesPaid:true}
];

//return array containing only the names of all students

let studentname=students.map(students=>students.name)
console.log(studentname);
const stud = [

{id: 1, name: "Anit Sharma", age: 20, course: "Computer Science",},

{id: 2, name: "Priya Singh", age: 22, course: "Information Technology",  },

{ id: 3, name: "Ravi Katar", age: 19, course: "Electronics", }, 
{id: 4, name: "Neha Verna", age: 21, course: "Mechanical", },
 {id: 5, name: "Sohan Lal", age: 23, course: "Civil Engineering",  }, 
 {id: 6, name: "Anjali Mehta", age: 20, course: "Computer Science",  }, 
 { id: 7, name: "Vikas Gupta", age: 22, course: "Information Technology",},

 {id: 8, name: "Pooja Mishra", age: 19, course: "Mechanical",  },
  { id: 9, name: "Rajesh Khanna", age: 21, course: "Electronics", },

{id: 10, name: "Sneha Kapoor", age: 22, course: "Civil Engineering",}
];
console.log(stud);

//add a new property status to each student
const statusprop=students.map(el=>({...el,
  status:students.marks>=60?"pass":"Fail"
}));
console.log(statusprop);

const nameCourseStr = students.map(s => `${s.name}-${s.course}`);
console.log(nameCourseStr);

const incMarks = students.map(s => ({ ...s, marks: s.marks + 5 }));
console.log(incMarks);

const Studcs = students.filter(s => (s.course == "Computer Science"));
console.log(Studcs);

const Studmarks = students.filter(s => (s.marks>=80));
console.log(Studmarks);

const fee= students.filter(s => (s.feesPaid==false));
console.log(fee);

const am= students.filter(s =>(s.age>20&&s.marks>70));
console.log(am);

const cm= students.filter(s =>(s.course=="Mechanical"&&s.marks<=85));
console.log(cm);

let totalm=students.reduce((sum,s)=>sum+s.marks,0);
console.log(totalm);



let totalsum=students.reduce((sum,s)=>sum+s.marks,0);
avgmar=totalsum/10;
console.log(avgmar);

let feepaid=students.reduce((count,s)=>count+(s.feesPaid!=0),0);
console.log(feepaid);

let great=students.reduce((max,s)=>s.marks>max?s.marks:max,0);
console.log(great);
