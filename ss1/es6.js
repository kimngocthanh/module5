let courses = [ 
  { 
    id: 1, 
    title: "ReactJS Tutorial", 
    rating: 4.2, 
  }, 
  { 
    id: 2, 
    title: "Angular Tutorial", 
    rating: 2.5, 
  }, 
  { 
    id: 3, 
    title: "VueJS Tutorial", 
    rating: 3.8, 
  }, 
  { 
    id: 4, 
    title: "Java Tutorial", 
    rating: 4, 
  }, 
  { 
    id: 5, 
    title: "JavaScript Tutorial", 
    rating: 3.5, 
  }, 
];
// ex1
// let ratings = courses.filter((count) => count.rating>=4);
// console.log(ratings);
// ex2
let addedCourses = [];
courses.map((count) =>{
    if(count.rating<4){
        addedCourses.push(count);
    }
    return addedCourses;
})

let a = addedCourses.map((count) => 
count.id + '-'+count.title+'-'+count.rating
)
// console.log(a);

// console.log(addedCourses);
// ex3
let arrSum = [...courses,...addedCourses];
console.log(arrSum);