// function Person(firstName, lastName, middleName, date, gender, height, weight) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.middleName = middleName
//     this.birthday = date
//     this.gender = gender
//     this.height = height
//     this.weight = weight
//
//     this.sayHello = function() {
//         return "Hello, my name is " + this.firstName + ", i am " + this.age() + " year old"
//     }
//
//     this.sayFullName = function() {
//         return this.lastName + " " + this.firstName + " " + this.middleName
//     }
//
//     this.age = function() {
//         return new Date().getFullYear() - this.birthday.getFullYear();
//     }
// }
//
// var pist = new Person('Roman', 'Svistunov', 'Sergeeevich', new Date(1994, 04, 15), 'male', 190, 300)
// var mekit = new Person('Nikita', 'Vladichenko', 'Igorevich', new Date(1994, 08, 19), 'male', 180, 200)
// var lenok = new Person('Lena', 'Todorova', 'Sergeeevna', new Date(1998, 02, 10), 'female', 150, 70)

// console.log(pist.sayHello());

//Это класс CD, используется для создания экземпляров этого класса, т.е. объектов
function CD(size, rewriteble) {
    //Объем
    this.size = size;
    //Сколько занято
    this.busy = 0;
    //Сколько доступно
    this.available = size;
    //Перезаписываемый или нет
    this.rewriteble = rewriteble;
    //Данные
    this.data = "";
}

//Класс CDRom
function CDRom() {
    //Когда мы создаем это объект (сидиром), то у него по умолчанию нет вставленого диска, поэтому undefined
    this.disk = undefined;

    //Метод вставки диска в привод. Переменная disk - это то диск, который мы хотим вставить
    this.insertCD = function(disk) {
        //Проверка на наличие диска который нужно вставить
        if (!disk) {
            throw new Error('Диск отсутствует');
        }

        //Проверка на отсутствие диска в приводе, т.к. 2 шт мы вставить не можем
        if (this.disk) {
            throw new Error('Диск уже вставлен');
        }

        //Свойство "disk" нашего привода инициализируем диском который нудно вставить
        this.disk = disk;
    }

    //Метод изъятия диска из привода
    this.unsertCD = function() {
        //Проверка на наличие диска в приводе
        if (!this.disk) {
            throw new Error('Диск не вставлен');
        }

        //В локальной переменной запоминаем диск который был в приводе
        var disk = this.disk;

        //Очищаем this.disk, якобы диска там больше нет
        this.disk = undefined;

        //Возвращаем диск который был вставлен
        return disk
    }

    //Метод запсии диска
    this.burn = function(data) {
        //Проверка на наличие диска в приводе
        if (!this.disk) {
            throw new Error('Диск не вставлен');
        }

        //Проверка насвободное пространство
        if (data.length > this.disk.available) {
            throw new Error('Не достаточно места на диске');
        }

        //Данные которые пришли в параметре data записываем в this.disk.data (диск)
        this.disk.data = data;

        //Уменьшаем свободное место на диске
        this.disk.available -= data.length;
        //Увеличиваем занятое место на диске
        this.disk.busy += data.length;

        //Выкидываем диск из привода
        return this.unsertCD();
    }

    //Метод очистки диска
    this.clear = function() {
        //Проверка на наличие диска в приводе
        if (!this.disk) {
            throw new Error('Диск не вставлен');
        }

        //Очищаем данные
        this.disk.data = "";
        //Делаем доступное пространство максимальным, т.е. равно объему
        this.disk.available = this.disk.size;
        //Обуляем занятое пространство
        this.disk.busy = 0;
    }

}

var diskovod = new CDRom();
var disk = new CD(700, false)

diskovod.insertCD(disk)
diskovod.burn("akhdgslkdjglsld")
diskovod.insertCD(disk)
diskovod.clear()
console.log(disk);
