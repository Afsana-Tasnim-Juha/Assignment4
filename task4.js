function findAddress(obj) {
    var address = {
        street: obj.street || '_ _ ',
        house: obj.house || '_ _ ',
        society: obj.society || '_ _ '
    }
    return address;

}
var address = {
    street: 10,
    house: '15A',
    society: 'Earth Perfect'

}
var searchAddress = findAddress(address);
var searchOutput = Object.values(searchAddress);

console.log(searchOutput);
