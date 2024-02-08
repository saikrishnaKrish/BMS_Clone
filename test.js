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