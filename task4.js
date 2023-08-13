function findAddress(obj) {
    var address = {
        street: obj.street || '__',
        house: obj.house || '__',
        society: obj.society || '__'
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
