class UserAccount {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    logDetais(): void {
        console.log(`The player ${this.name} is ${this.age} years old.`)
    };
}


// HERDAR de outra classe
class CharAccount extends UserAccount {
    nickname: string;
    level: number;

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age);
        
        this.nickname = nickname;
        this.level = level;
    }
}

const will = new UserAccount("William", 30);

console.log(will);
console.log(will.age);
will.logDetais();

const john = new CharAccount("John", 45, "johnmaster", 80);
john.logDetais();