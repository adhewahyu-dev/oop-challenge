# oop-challenge
# OOP
OOP atau Object Oriented Programming merupakan salah satu pattern pada programming yang sangat umum digunakan oleh developer di dunia.

### Class
Pembuatan class pada Javascript
```sh
class Human {
    constructor(name){
        this.name = name                        // Property
    }
    printName(){
        console.log(this.name)                  // Method
    }
}
const human = new Human("jamil")
human.printName()
```

### Static Method
Sebuah method yang dapat dipanggil tanpa harus membangun class dari method tersebut
```sh
class Person {
    constructor(name, age, live){
        this.name = name
        this.age = age
        this.live = live
    }
    static instance(){
        return new Person("Angga", 20, "Magelang")
    }
    printName(){
        return console.log(`Aku adalah ${this.name}`)
    }
}
const person = Person.instance()
person.printName()
```

### Method Chaining
Memanggil sebuah method secara berantai yang mempunyai return value yang sama.
```sh
class Person {
    constructor(name){ this.name = name }
    setAge(age){
        this.age = age
        return this
    }
    setLive(live){
        this.live = live
        return this
    }
    printAll(){
        console.log(this.name, this.age, this.live)
    }
}
const person = ner Person("Ahmad")
person.setAge(12).setLive("Bekasi").setAge(20).printAll()
```

### Encapsulation
Sebuah metode untuk membungkus properti atau method di dalam class agar method dan property di dalam class tersebut tidak disalahgunakan.
```sh
class Person {
    constructor(){}
    setName(firstName, lastName) {
        this.name = firstName + " " +lastName
    }
    getName() {
        return this.name.split(" ")[0]
    }
}
const person = new Person()
person.setName("Suparman", "Superman")
console.log(person.getName())
```

### Inheritance
Sebuah metode untuk menurunkan sifat pada class tersebut baik berupa property maupun method pada class lain.

```sh
class Vehicle {
    wheels = 0
    constructor(name) { this.name = name }
    wheel() {
        console.log(`Berdoa ${this.wheels}`)
    }
}
class Car extends Vehicle {
    constructor(name, wheels){
        super(name)
        this.wheels = wheels
    }
}
const car = new Car("Sedan", 4)
car.wheel()
```

### Polymorphism
Mengubah sebuah method dari suatu subclass yang berbeda dengan superclass.
```sh
class Human {
    constructor(name) { this.name = name }
}
class Programmer extends Human {
    constructor(name, ability){
        super(name)
        this.ability = ability
    }
}
const programmer = new Programmer("Angga", "java")
Human.prototype.printAll = () => {
    console.log(`${programmer.name} with ${programmer.ability}`)
}
programmer.printAll()
```
