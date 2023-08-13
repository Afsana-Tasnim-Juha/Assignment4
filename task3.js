
function sortMaker(arr) {
    if (arr.length = 2) {
        if (arr[1] > 0) {
            return arr.slice().sort((a, b) => b - a);
        }
        else if (arr[0] === arr[1]) {
            return "equal";
        }
        else if (arr[0] < 0 || arr[1] < 0) {
            return "Invalid";

        }
        else {
            return arr;
        }
    }
    else {
        return arr;
    }

}


const arr1 = [2, 3];
const arr2 = [4, 4];
const arr3 = [4, -4];

const output1 = sortMaker(arr1);
const output2 = sortMaker(arr2);
const output3 = sortMaker(arr3);
console.log(output1);
console.log(output2);
console.log(output3);