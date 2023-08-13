function canPay(changeArray, totalDue) {

    if (changeArray.length === 0) {
        return false;
    }
    var sum = 0;
    var price = 10;
    for (var i = 0; i < changeArray.length; i++) {
        sum = sum + changeArray[i];
        if (sum >= price) {
            return true;
        }

    }
    return false;

}


var arr = [1, 5, 5];
var output = canPay(arr);
console.log(output);