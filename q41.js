//Q41.Magicians: Make a array of magician’s names. 
//Pass the array to a function called show_magicians(), 
//which prints the name of each magician in the array.
function showMagicians(magician) {
    for (var _i = 0, magician_1 = magician; _i < magician_1.length; _i++) {
        var magicians = magician_1[_i];
        console.log(magician);
    }
}
var magicianNames = ["penn jillette", "criss Angel", "Teller"];
showMagicians(magicianNames);
