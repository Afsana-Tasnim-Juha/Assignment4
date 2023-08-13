function cubeNumber(number) {

    if (typeof number === 'number') {
        return number * number * number;
    }
    else {
        return "Invalid";
    }


}

function matchFinder(string1, string2) {

    if (string1.indexOf(string2) !== -1) {
        return true;
    } else {
        return false;
    }

}


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