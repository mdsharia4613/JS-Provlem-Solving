// একটি array থেকে সব সংখ্যাকে প্রিন্ট করো।

const numbers = [10, 20,30,40,50,60];

for(const num of numbers){
    console.log(num)
}

// 6. একটি array এর যোগফল বের করো।

const x = [10, 20,30,40,50,60];
let sum = 0;
for(const x of numbers){
    sum = sum + x;
}
console.log(sum)

// 7. একটি array এর সবচেয়ে বড় সংখ্যা বের করো।
const y = [10, 20,30,40,50,60];
let max =  y[0];

for(const  num of y){
    if(num > max){
        max = num;
    }
}
console.log('max number', max)

// 8. একটি array থেকে শুধু জোড় সংখ্যা নতুন array তে রাখো।

const even =[12,11,33,22,44,43,56]
const evenNumber =[];

for(let num of even){
    if( num % 2 == 0){
         evenNumber.push(num)
    }
}
console.log('newArray', evenNumber)
// opptoinal
const number =[12,11,33,22,44,43,56]
let maxs =number[0];

for(const num of number){
    if(num > maxs){
        maxs = num;
    }
}
console.log('max number', maxs)

// 9. ১ থেকে ৫০ এর মধ্যে যেসব সংখ্যা ৩ এবং ৫ দিয়ে একসাথে বিভাজ্য, শুধু সেগুলো প্রিন্ট করো।

for(let i = 1; i < 50; i++){
    if( i % 3 == 0 && i % 5 == 0){
        console.log(i);
    }
}

// 10. একটি array আছে। ১০ এর চেয়ে ছোট সংখ্যা বাদ দাও| শুধু ১০ বা তার বেশি সংখ্যাগুলো নতুন array তে রাখো|

const p = [5, 8, 12, 20, 7];

let o = [];

for(let num of p){
    if(num  >= 10){
        o.push(num);
    }
}
console.log(o)