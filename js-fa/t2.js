/*
function filterRange(arr, num1, num2) {
    return arr.filter(currValue => currValue >= num1 && currValue <= num2);
}


let filtered = filterRange(arr, 1, 4);
*/

// Sol from docs:
let arr = [5, 3, 8, 1];
alert( arr );

function filterRangePlace(arr, num1, num2) {
    for(let i = 0; i <= arr.length; i++) {
        if(arr[i] < num1 || arr[i] > num2) {
            arr.splice(i, 1);
            i--;
        }
    }
}

filterRangePlace(arr, 1, 4);
alert( arr ); // 5,3,8,1 (not modified)