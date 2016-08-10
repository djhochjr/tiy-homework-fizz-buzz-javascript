/**
 * Created by davehochstrasser on 8/9/16.
 */
function fizzBuzz() {

}

function doIT(start, end){



    for (var x = start; x <= end; x++) {
        console.log(x);
}
    //For numbers which are multiples of both three and five print "FizzBuzz".
    if (x % 15) {
    console.log("FizzBuzz");
}

//For multiples of three print "Fizz" instead of the number.
    else if (x % 3 == 0) {
    console.log("Fizz");

}
//For the multiples of five it print "Buzz".

    else if (x % 5 == 0) {
    console.log("Buzz");
}
    else{
        console.log(x);
    }

}
//For the multiples of five it print "Buzz".
    fizzBuzz.myfizzBuzz = new fizzBuzz();
    console.log(doIt( 1, 100));





