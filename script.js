//1.
function abc(){
    var a=10;
    function pqr(){
        console.log(a);
    }
    pqr();
}abc();

// //2.
 setTimeout(() =>{
     console.log('1')
     setTimeout(() => {
         console.log('2')
         setTimeout(() =>{
             console.log('3')
           setTimeout(() =>{
                      console.log('4')
                  setTimeout(() => {
                    console.log('5')
                    setTimeout(() =>{
                       console.log('6')
                         setTimeout(() =>{
                           console.log('7')
                         },7000)
                     },6000)
                 },5000);
             },4000);
         },3000)
     },2000);
 },1000);

// //3.
 const printnumber =(time,func) => {
     return new Promise((resolve,reject) =>{
         if(func){
             setTimeout(() => {
                 resolve (func());
             },time)
         }else{
             reject('give valid number');
         }
     })
 }
//3.
 printnumber(0, () => console.log("Numbers"))
 .then(() => {
     return printnumber(1000, () => console.log('1'))
 })
 .then(() => {
     return printnumber(2000, () => console.log('2'))
 })
 .then(() => {
     return printnumber(3000, () => console.log('3'))
 })
 .then(() => {
     return printnumber(4000, () => console.log('4'))
 })
 .then(() => {
     return printnumber(5000, () => console.log('5'))
 })
 .then(() => {
     return printnumber(6000, () => console.log('6'))
 })
 .then(() => {
     return printnumber(7000, () => console.log('7'))
 })

// //4.
 function prom(x){
     return new Promise((resolve,reject) => {
         if(x === "yes"){
             resolve("promise resolved");
         }else{
             reject("promise rejected");
         }
     });
 }
 prom("")
 .then((x) => console.log(x))
 .catch((y) => console.log(y))

// //5.
function age(a,b){
    return a+b;
}
function ABc(name, age){
    console.log(name,age);
}
ABc('EA',age(10,11))

//6.
setTimeout(() => {
    console.log('a');
    setTimeout(() => {
        console.log('b');
        setTimeout(() => {
            console.log('c');
        },3000)
    },2000)
},1000)

//7.
function mypromise(){
    return new Promise((resolve, reject) => {
        let count=3;
        if(count > 2){
            resolve("great");
        }else {
            reject("low");
        }
    })
}
mypromise.then((x) => console.log(x))
.catch((y) => console.log(y))

//8.
function createorder(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("order created");
            resolve();
        },1000);
    });
}
async function orderplaced(){
    try{
        await createorder();
        console.log("order placed");
    }
    catch{
        console.log("error");
    }
}
orderplaced();

//9.
const ABC=()=>
    new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve()
        },1000);
    });

const xyz=()=>
    new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve()
        },2000);
    });

const step2 =()=>console.log("abc,xyz");

Promise.all([ABC(),xyz()]).then(() => {
    step2();
})
.catch(() => {
    console.log("error");
});
