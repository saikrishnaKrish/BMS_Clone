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