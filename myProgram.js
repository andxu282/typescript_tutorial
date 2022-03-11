var myName = { first: "Andrew", last: "Xu" };
var outputToConsole = function (result) {
    console.log("Output: " + result);
};
function getNameLength(name, callback) {
    var len = name.first.length + name.last.length;
    callback(len);
}
getNameLength(myName, outputToConsole);
