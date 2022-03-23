
 let large =0;
 let secondlar=0;
function SecondLarge(arr){ 
    for(let i = 0; i <= arr.length-1; i++){
        if(arr[i] > large){
            secondlarge = large;
            large = arr[i];
        }
        else if( arr[i] > secondlarge && arr[i] != large){
            secondlarge = arr[i];
        }
    }
    console.log(secondlarge);
}
let arr = [12,35,1,10,34,1]
SecondLarge(arr);
