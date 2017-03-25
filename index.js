function Person(firstName, lastName, middleName, date, gender, height, weight) {
    this.firstName = firstName
    this.lastName = lastName
    this.middleName = middleName
    this.birthday = date
    this.gender = gender
    this.height = height
    this.weight = weight

    this.sayHello = function() {
        return "Hello, my name is " + this.firstName + ", i am " + this.age() + " year old"
    }

    this.sayFullName = function() {
        return this.lastName + " " + this.firstName + " " + this.middleName
    }

    this.age = function() {
        return new Date().getFullYear() - this.birthday.getFullYear();
    }
}

var pist = new Person('Roman', 'Svistunov', 'Sergeeevich', new Date(1994, 04, 15), 'male', 190, 300)
var mekit = new Person('Nikita', 'Vladichenko', 'Igorevich', new Date(1994, 08, 19), 'male', 180, 200)
var lenok = new Person('Lena', 'Todorova', 'Sergeeevna', new Date(1998, 02, 10), 'female', 150, 70)

console.log(pist.sayHello());
