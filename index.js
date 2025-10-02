//  ১ থেকে ১০ পর্যন্ত সব সংখ্যা প্রিন্ট করো

for(i = 1; i <= 10; i++){
    console.log(i)
}

// শুধু জোড় সংখ্যা প্রিন্ট করো (১ থেকে ২০ পর্যন্ত)

for(i = 1; i <= 20; i++)
    if(
        i % 2 == 0){
        console.log(i)
    }

 //একটি সংখ্যা নাও, যদি সেটা জোড় হয় তাহলে "Even" আর বিজোড় হলে "Odd" প্রিন্ট করো।
 

let n = 10;
if( n % 2 == 0){
    console.log('even number', n)
}
else{
    console.log('odd number', n)
}

// . একটি সংখ্যা নাও। যদি সেটা ৫ দিয়ে বিভাজ্য হয় → "Divisible by 5", না হলে → "Not Divisible by 5"

const x = 25;

if( x % 5 == 0){
    console.log('divisible', x);
}
else{
    console.log('not divisible', x)
}



