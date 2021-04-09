let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓

function isEven(num) {
    for (var i =0; i<numbers.length; i++) {
        num = numbers[i];
        if (num % 2 === 0) {
            console.log(num + 'は偶数です');
        }
    }
}
isEven();


class Car {
    constructor(gass, num) {
        this.gass = gass;
        this.num = num;
    }
    number(){
        console.log (`ガソリンは${this.gass}です。ナンバーは${this.num}です。`);

    }
}
let myCar = new Car(20.5, 20);
myCar.number();