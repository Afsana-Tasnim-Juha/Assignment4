function matchFinder(string1, string2) {

    if (string1.indexOf(string2) !== -1) {
        return true;
    } else {
        return false;
    }

}
const string1 = 'Peter Parker';
const string2 = 'Code';

const findString = matchFinder(string1, string2);
console.log(findString);
