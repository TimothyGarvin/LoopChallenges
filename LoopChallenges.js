//Print Odds 1-20//

for(var i=0;i<=20;i++)
    if(i%2!==0){
        console.log(i)
    }

//Decreasing Multiples of 3//

for(var i=100;i>=0;i--)
    if(i%3==0){
        console.log(i)
    }

//Print The Sequence//

var arr=[4,2.5,1,-0.5,-2,3.5]
var newArr=[]

function LogArr(){
    for(var i=0;i<=arr.length-1;i++)
        newArr.push(arr[i])
        console.log(newArr)
}

LogArr(arr)

//Sigma//

var sum=0
for(var i=0;i<=100;i++)
    sum += i
    console.log(sum)

//Factorial//

var product=1

for(i=1;i<=12;i++)
    product = product*i
    console.log(product)