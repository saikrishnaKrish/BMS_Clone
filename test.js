// // let ar=[1,2,3,4,5]
// // let res=1,result=[];

// // for(let i=0;i<ar.length;i++){
// //   res=res*ar[i];
// // }

// // function getRes(inp1,inp2){
// //   let c=0;
// //   while(inp1>=inp2){
// //     inp1=inp1-inp2;
// //     c++
// //   } 
// //   return c;
// // }

// // for(let i=0;i<ar.length;i++){
// //   result.push(getRes(res,ar[i]))
// // }

// // console.log(result);



// let ar=[1,2,3,4,5,6,7,8,9]
// // let ar2=[100, 30, 50, 555, 222]
// // console.log([...ar,...ar2])
//     // console.log(ar.slice(2,4))
// // function splitAndRev(array,startI,endI){

// //     if(array.length==0) {
// //         return -1
// //     }

// //     let si= array.slice(0,startI);

// //     let ei=array.slice(endI)

// //     let mid =array.slice(startI,endI)

// //     mid.reverse();

// //     return [...si,...mid,...ei]
// // }


// // splitAndRev(ar,1,5)


// startI=2
// endI=5
// // while(startI<=endI){
// //     // console.log(ar)
// //     let temp=ar[startI];
// //     ar[startI]=ar[endI];
// //     ar[endI]=temp;
// //     startI++
// //     endI--
// // }

// console.log(ar)


let a=5,b=4;
[a,b]=[b,a]
console.log(a,b)
let ar1=[1,2,3,4];
let array1=[5,6,7,8];

// console.log(ar2[2])

[ar1[0],array1[2]] =[ar1[2],array1[0]];
[ar1[0],array1[2]] =[ar1[2],array1[0]];
console.log(ar1)
console.log(array1)

// ============================================================


//product 
// <!-- Monitor
// -companyName--LG
// -mnfdDate--Today
// -price--20000
// -weight-2.5kg
// -Size-32 inch -->
// <!-- ========================== --> 
// let a="222"
console.log("qweertyu------------" +a)
 a="99+6666"
console.log("qweertyu-------------" +a)
// const b=5555
console.log(b)
console.log(b)
function same(param1,param2,...args){
    console.log("param1,param2",param1,param2)
    console.log("remaining",args)
}
same(5,5,4555,88, 255885)

// ==================================
// function ip => items return =>price
function CalculatePrice(p1,p2,p3,p4){
    p1=p1*500;    
    p2=p2*300;    
    p3=p3*400;    
    p4=p4*600;    
    return p1+p2+p3+p4
}

console.log("Total Bill",CalculatePrice(24,56,88,99))
// ======================================================
var hei =888;
console.log(hei)
var hei ="ryu";
console.log(hei)
hei=8899966
console.log(hei)

function ChangeME(){
    const a=8;//function scoped
        function InnerME(){
        
            // console.log("hi",a)//undefined || null
            // a=88//reassinging
            let a = 99 
            console.log(a)//99
            a=a+10
            console.log(a)  //109
                function Inside(){
                    console.log("Hello am inside",a)//8
                }
                Inside()
        }
        InnerME()
        console.log(a)
        // return 55
 }


 function ChangeME(){
    const a=8;//function scoped
        function InnerME(){
        
            // console.log("hi",a)//undefined || null
            // a=88//reassinging
            let a = 99 
            console.log(a)//99
            a=a+10
            console.log(a)  //109
                function Inside(){
                    console.log("Hello am inside",a)//8
                }
                Inside()
        }
        InnerME()
        console.log(a)
        // return 55
 }
 console.log(ChangeME())
// =========  ========================== ========================


let arr=[2,6,5,7,8,89,55,5]

// index--

console.log(arr)

console.log(arr.length)

let n =arr.length;
for(let i=0 ;i<n;i++ ){
    console.log("index "+ i + "  "+arr[i] )
}

//values in the array are accessed by their index's
// array will have index's and values and length and some methods
let a2 =["rtyui",5,5,8,true]

console.log(a2)

//Anonymous function
(()=>{
    console.log(" hi there first")
})() 


let arrowfun =()=> console.log("hi")

console.log(arrowfun())

let double = (a)=>{ a*a};

let cube = (a)=>{ return a*a*a};

console.log(double(5))




// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);



setTimeout(()=>{
    console.log("Hi I am timeout")
},20)

console.log("first")


 const id =  setInterval(()=>{
                console.log("hello")
            },2000)

setTimeout(()=>{
    clearInterval(id)
},5000)

let arr1 =[8,5,5,8,5]
let res=8
console.log(arr1.map((val,i)=>res*val))
let arr1 =[8,5,5,8,5]
let result = arr1.filter((val,i)=>val!=5)

console.log(result)

let arr1 =[8,5,5,8,5]
let res1=1
let aa = arr1.reduce((res1,curr)=>(res1*curr)) 
console.log(arr1)
console.log(aa)



================================



console.log("b value",b)
console.log("a value",a)
{
console.log("b value",b)
    var b=88
    console.log("a value",a)
    let a=855

}

let b;
console.log(b)

console.log(b)


// value can also be function






let um={
    length:90,
    width:50,
    cost:100,
    ca: function calculateArea(){
        this.cost=this.cost+50;
        return "length "+ um.length+" width " +this.width+" cost " 
        + this.cost+" weight "+this.weight
    }
}


// console.log(um.length)
console.log(um.ca())

var weight ="500gm"
let um={
    length:90,
    width:50,
    cost:100,
    ca: calculateArea=()=>{
        this.cost=this.cost+50;
        return "length "+ um.length+" width " +this.width+" cost " 
        + this.cost+" weight "+globalThis
    }
}


// console.log(um.length)
console.log(um.ca())
// The value of this will depend on the calling function
//arrow functions does not have value access to this.
var weight ="500gm"

console.log(globalThis.weight)


let cap = {
    firstName : "Steve",
    sayHi : function(){
        console.log("53", this.firstName);
        const iAmInner = function(){
            console.log("55",this.firstName);
        }
        iAmInner();
    }
}
cap.sayHi();



let cap = {
    firstName : "Steve",
    sayHi : function(){
        console.log("53", this.firstName);
        const iAmInner = () => {
            console.log("55",this.firstName);
        }
        iAmInner();
    }
}
cap.sayHi();


// op:

var firstName = "Loki"
let cap = {
    firstName : "Steve",
    sayHi : () => {
        console.log("53", this.firstName);
        const iAmInner = () => {
            console.log("55", this.firstName);
        }
        iAmInner();
    }
}
cap.sayHi();



let ladder = {
    stop:0,
    up(){
        this.stop ++ ;
    },
    down(){
        this.stop -- ;
    }
    showStep: function(){
        console.log(this.stop);
    }
}
ladder.up();
ladder.up();
ladder.up();
ladder.down();
ladder.showStep();

===================================================


let cap = {
    name: "Steve",
    team: "cap",
    petersTeam: function(mem1, mem2,...args){
        console.log(`Hey ${this.name} am your neighborhood spiderman and I belong to ${this.team}'s team`);
        console.log(`I am working with ${mem1} & ${mem2} & ${args} `);
    }
}
let ironMan = {
    name: "Tony", 
    team: "iron man"
}

//  borrowing a function and can use it for another object without actually adding into it. 
//We can also pass parameters for that function.
// cap.petersTeam.apply(ironMan,["natasha", "war machine", "natasha", "natasha2", "natasha4"]);

const boundfn=cap.petersTeam.bind(ironMan)
console.log(boundfn("q","p"))



let sum = function(){
    let sum=0;
        for(let i=0;i<this.length;i++){
            sum=sum+this[i]
        }
console.log(sum)


}


let a=[8,899,7,88,8]

console.log(Array.isArray(a))

console.log( a.__proto__)

console.log(typeof sum)

// ===============================================/

function fi(...args){
    console.log(arguments[1]==8)
    console.log(args)
}

fi(5,8,6,8,6,8,6,8,6,8,6)


let arr=[1,3,4,5]
let arr2=arr //---refernece
console.log(arr2)
console.log(arr)
arr2[2]=99;

console.log(arr2)
console.log(arr)


=========================================================

console.log(0==null)
console.log(undefined==null)
console.log(typeof String)
console.log(undefined==undefined)


console.log(+null);//null   //0
console.log(null);//null    //null
console.log(!"");//false    //tryue
console.log(+undefined); //true  //NAN
console.log(undefined);//undefined     //undefined
console.log("");//nothing will print   //noting printed
console.log(true);//true   //true
console.log(+0);//0           //0
console.log(+"");//true    //0


for(let i=0;i<3;i++){   // 1 2 3      //undefined  undefined undefined
    setTimeout((i)=>{
        console.log(i);
    },(i))
}

for(var i=0;i<3;i++){  // 1 2 3  //undefined  undefined undefined
    setTimeout((i)=>{
        console.log("hi",i);
    })
}


for(let i=0;i<3;i++){
    setTimeout(()=>{
            console.log(i); //0 1 2         // 0 1 2
    })
}

for(var i=5;i<9;i++) {  //this will throw an error
    setTimeout(()=>{
        console.log(i);
    })
}

// 9999999
// i<3
i= 0 
// ----
i=1
// ----
i=2  
//--
i<3  3 <3

int a = 55



// This is anonymous---> arrow func

var iii=5
(()=>{
    console.log("first",iii )
})()



(()=>{
    console.log("second")
})()






const obj={
    a:"akanksha",
    b:{
    c:"sai krishna",
    d:{    
    e:"BigOh",
    }
    }
    }
    

console.log(obj['b']['d'].e)
console.log(obj.b.d.e) //chaining
console.log({...obj.b.d.e.join((e)=>e.join(""))})




// ===============================
let arr = [1, 2, 3, 4, [10, 12], 5, 6];
// spreadArray now contains the same elements as arr, but it's a new array with a separate reference.
let spreadArray = [...arr];
spreadArray[2] = 100;
spreadArray[4] = 200;
spreadArray[4][1] = 300;
console.log("outputs ", spreadArray, arr); 
// Ouput:
// outputs  [
//     1, 2, 100, 4,
//   200, 5,   6
// ] [ 1, 2, 3, 4, [ 10, 12 ], 5, 6 ]





// input  -> nested array
let input = [1, 2, 3, [4, 5], [6, 7, 8, [9, 10, 11]]];


let a=[5,6,85,56]
let b=[44,56,8,56]
b.push(...a)
console.log(b)

// output -> single level of array with num 
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// [4, 5] -> [4,5]
// [6, 7, 8, [9, 10, 11]] -> [6, 7, 8, 9, 10, 11]

function flatten(srcArr) {
    let newArr = [];
    for (let i = 0; i < srcArr.length; i++) {
        // check if elemnt -> array -> 
        let elem = srcArr[i];
        let isElemArr = Array.isArray(elem);
        if (isElemArr) {
            // flatten it again for multiple levels
            let smalleFlattenArr = flatten(elem);
            newArr.push(...smalleFlattenArr);
        } else {
            //push it to newArr;
            newArr.push(elem);
        }
    }
    return newArr;
}
let flattenedArr = flatten(input);
console.log(flattenedArr);
// Output:
// [
//    1, 2, 3, 4,  5,
//    6, 7, 8, 9, 10,
//   11
// ]
