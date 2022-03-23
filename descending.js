
arr=[66,77,4,44,55,89]
function sortNums() {
        let sorted = arr.sort((a, b) => b - a);
        console.log(sorted.join(", "));
    }
     
sortNums();