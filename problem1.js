
//  একটি Array থে কে index ব্যবহার করে যে ক োন ো একটি element বে র করুন।

// const numbers = [10, 23, 33, 14, 34, 55]
// console.log(numbers[2])

// একটি condition লি খুন — যদি marks 80 এর বে শি হয় তবে "A+" দে খাবে , নাহলে "Fail" দে খাবে ।

// const num = 90;

// if(num > 80){
//     console.log("your got A+" )
// }
// else{
//     console.log("you are fail")
// }

// একটি Object এ student এর information থাকবে । সে খান থে কে student এর marks বে র করুন (Dot Notation ব্যবহার করে )।

// const student ={
//     name: 'klhklsfh',
//     marks: 23,
//     age: "50",
//     id: 35554
// }

// console.log(student.marks)

// // Function এর মাধ্যমে একটি নাম print করুন।

// const ami = (name) =>{
//     console.log(name)
// }
// ami("sharia")

// একটি loop ব্যবহার করে ১ থে কে ১০ পর্যন্ত সংখ্যা প্রি ন্ট করুন।

// let sum = 0;
// const array =[];
// for( i = 0; i <= 10; i++){
//     sum = sum + i;
//     array.push(sum)
//     console.log('sum', sum)
  
// }

// console.log(array)

const numbers =[11,12, 33,22,44, 55,6,,77,88]
const array =[]


// for(const num of numbers){
//     if( num % 2 == 0){
//         array.push(num)
//         console.log(num)
//     }
// }
// console.log(array)

const students ={
    s1: {name: 'Ashik', mark: 89},
    s2: {name:'abir', mark: 99},
    s3: {name:'Maruf', mark:10}
}

let topStudent = null;
let maxMarks = 0;

for(let key in students){
    const studrnt = students[key];
    if(studrnt.mark > maxMarks){
        maxMarks = studrnt.mark;
        topStudent = studrnt;
    }
}

console.log('marks', topStudent.mark);
