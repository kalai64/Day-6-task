
// 1:-
console.log(`Question 1:-`);
class movie{
    constructor(tittle,studio,rating="PG"){
        this.tittle = tittle;
        this.studio = studio;
        this.rating = rating;
    }
}
 let res = new movie("leo","7screen");
 let res2 = new movie("Casino Royale","Eon Productions","PG­13");
 console.log(res.tittle);
 console.log(res.studio);
 console.log(res.rating);
 console.log(res2.tittle);
 console.log(res2.studio);
 console.log(res2.rating);

let movie1={
            get PG(){
                 console.log("leo");
                return this._PG;
                    }
            }
        movie.PG = "leo";
        console.log(movie.PG);


//2:-
console.log(`Question 2:-`);
class Circle{
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }
        get radiusCircle(){
            return this.radius;
        }
        set radiusCircle(radius){
          this.radius = radius;
        }
        get colorCircle(){
            return this.color;
        }
        set colorCircle(color){
            this.color = color;
        }
        get toString(){
            return `"Circle[radius=${this.radius},color = ${this.color}]"`;
        }
        get areaCircle(){
            return Math.PI*this.radius*this.radius;
        }
        get circumferenceCircle(){
            return 2 *Math.PI*this.radius;
        }

    }

    var res5 = new Circle(1.0,"red");
    console.log(res5.radiusCircle);
    res5.radius = 1.5;
    console.log(res5.radiusCircle);
    console.log(res5.colorCircle);
    res5.color = "green";
    console.log(res5.colorCircle);
    console.log(res5.toString);
    console.log(res5.areaCircle);
    console.log(res5.circumferenceCircle);

//3:-
console.log(`Question 3:-`);
class person{
    constructor(name,gender,age,maritalstatus,salary){
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.maritalstatus = maritalstatus;
        this.salary = salary;
    }
}
let result = new person("kalai","Male",26,"Single",15000);
console.log(result.name);
console.log(result.gender);
console.log(result.age);
console.log(result.maritalstatus);
console.log(result.salary);

//4:-
console.log(`Question 4:-`);
class uber{
    constructor(km,price=25){
        this.km = km;
        this.price = price;
    }
        get Price(){
            return this.km*this.price;
        }
        
    }

var res4 = new uber(6);
var res5 = new uber(6,60);
console.log(res4.Price);
console.log(res5.Price);
     