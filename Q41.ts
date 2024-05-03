//Q41.Magicians: Make a array of magician’s names. 
//Pass the array to a function called show_magicians(), 
//which prints the name of each magician in the array.

function showMagicians(magician:string[]): void  {
    for(const magicians of magician) {
        console.log(magician);
    }
}
const magicianNames:string[] =["penn jillette","criss Angel","Teller"];
showMagicians(magicianNames);