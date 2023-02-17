var score = 1;
score = 55;
score = "0";
var JuanAndres = {
    name: "Juan Andres",
    id: 1900
};
JuanAndres = {
    username: 'JuanPez',
    id: 1900
};
function getID(id) {
    if (typeof id === 'string') {
        id.toLowerCase();
        return id;
    }
    return id;
}
getID(1);
getID('1');
// arrays
var data = [1, 2, 3, '4'];
var pi = 3.14;
