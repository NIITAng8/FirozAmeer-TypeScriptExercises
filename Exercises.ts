console.log("----------------------Exercise 1-------------------------");


console.log("Hello World");


console.log("----------------------Exercise 2-------------------------");

let year: number = 2008;
// let isLeapYear:boolean = true;

let IfLeapYear = (_year:number): void =>
{
    let isLeapYear:boolean = true;
    if(year%4 == 0){
        isLeapYear = true;
        if(year % 100 == 0 && year % 400 != 0){
            isLeapYear = false;
        }
    }else{
       isLeapYear = false;
    }
    if(isLeapYear){
        console.log('This is a leap year.');
    }else{
        console.log('This is not a leap year.');
    }
}

IfLeapYear(year);

console.log("----------------------Exercise 3-------------------------");

let listNumOfDaysInYear = new Map<string,number>();
listNumOfDaysInYear.set("Earth",365);
listNumOfDaysInYear.set("Mars",288);

let GetAgeInYears = (_ageInSeconds:number,_planet:string):void => {
    let _ageInYears = _ageInSeconds / (3600*24*listNumOfDaysInYear.get(_planet));
    console.log(Math.round(_ageInYears));
}

GetAgeInYears(3150000000,"Earth");
GetAgeInYears(3150000000,"Mars");

console.log("----------------------Exercise 4-------------------------");

let CountWordOccurence = (_phrase:string) => {
    let _word_array = _phrase.split(' ');
    let i:number = 0;
    let _word_occurrence_map = new Map<string,number>();
    for(; i < _word_array.length; i++)
    {
        _word_occurrence_map.has(_word_array[i]) == true ? _word_occurrence_map.set(_word_array[i],_word_occurrence_map.get(_word_array[i]) + 1)
        :_word_occurrence_map.set(_word_array[i],1);
    }
    console.log(_word_occurrence_map);
}
CountWordOccurence("Once upon a a time there lived lived a king .");

console.log("----------------------Exercise 5-------------------------");

let ReverseString = (_name:string) : void =>{
    console.log(_name.split('').reverse().join(''));
}
ReverseString("Firoz");

console.log("----------------------Exercise 6-------------------------");

class Triangle{
    side_1:number;
    side_2:number;
    side_3:number;

    constructor(_side1:number, _side2:number,_side3:number){
        this.side_1 = _side1;
        this.side_2 = _side2;
        this.side_3 = _side3;
    }

    GetTriangleType():string{
        let _triangle_type:string = "";
        if(this.side_1 == this.side_2 && this.side_2 == this.side_3){
            _triangle_type = "Equilateral";
        }else if(this.side_1 == this.side_2 || this.side_1 == this.side_3 || this.side_2 == this.side_3){
            _triangle_type = "Isosceles";
        }else{
            _triangle_type = "Scalene";
        }
        return _triangle_type;
    }
}

let _triangle = new Triangle(1,5,2);
console.log(_triangle.GetTriangleType());

console.log("----------------------Exercise 7-------------------------");

let GetArmstrongNumber = (_num:number) =>
{
    return new Promise(function(resolve,reject){
    let _armstrong_number:number = 0;
    let _num_temp:number = 0;
    let _num_output:number = _num;
    let _len =  Math.floor(Math.log10(_num)) + 1;

    if(_num < 0){
        reject("Please provide a positive number.");
    }
    while(_num >= 1){
        _num_temp = _num % 10;
        _num = Math.floor(_num / 10);
        _armstrong_number = _armstrong_number + Math.pow(_num_temp,_len);
    } 
    if(_num_output == _armstrong_number){
        //console.log("The number " + _num_output + " is an armstrong number.");
        return resolve("The number " + _num_output + " is an armstrong number.")
    }else{
        //console.log("The number " + _num_output + " is not an armstrong number.");
        return resolve("The number " + _num_output + " is not an armstrong number.");
    }
})
}
GetArmstrongNumber(1634).then(done,error);
function done(msg){
    console.log(msg);
}
function error(msg)
{
    console.log(msg);
}

