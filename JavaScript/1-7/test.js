class taiyaki {
    constructor(content) {
        this.content = content;
    }
    eat() {
        console.log (`中身は${this.content}です`);
    }
}
let annko = new taiyaki('クリーム');
annko.eat();
