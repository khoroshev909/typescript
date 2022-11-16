// Generis
//=================================
function merge<T extends object, R extends object>(a: T, b: R): T & R {
    return Object.assign({}, a, b)
}

// Запись без generics - придётся вручную указывать все поля
// function merge(a: { name: string }, b: { age: number }): { name: string, age: number } {
//     return Object.assign({}, a, b)
// }

const obj = merge({ name: 'Eugene' }, { age: 31 })
const obj2 = merge({ model: 'Ford' }, { year: 2010 })
// const str = merge('aaa', 'bbb') - не валидно тк указано generic extends object - объект с любыми полями

//=================================
interface ILength {
    length: number
}

// generic с любым объектом с ключём length
function withLength<T extends ILength>(value: T) {
    return {
        value,
        count: `В этом объекте ${value.length} символов`
    }
}

// withLength('Hello')
// withLength([1, 2, 3])
// withLength({ length: 42 })


//=================================

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
    return obj[key]
}

const person = {
    name: 'Eugene',
    age: 31
}

getObjectValue(person, 'name')
getObjectValue(person, 'age')
// getObjectValue(person, 'job') - ключа job нет

//====================================

class Collection<T extends number | string | boolean> {

    private _items: T[] = []

    constructor(_items: T[] = []) {
        this._items = _items
    }

    add(item: T) {
        this._items.push(item)
    }

    remove(item: T) {
        return this._items.filter((i) => i !== item)
    }

    get items(): T[] {
        return this._items
    }
}

const collection = new Collection<string>(['I', 'Am', 'Groot'])

collection.remove('Am')
collection.add('!')

//==============

interface Car {
    year: number,
    model: string
}

function createAndValidateCar(model: string, year: number): Car {
    // Partial - говорит что в объекте может не хватать некоторых ключей
    const car:Partial<Car> = {}

    if (model.length > 3) {
        car.model = model
    }

    if (year > 2000) {
        car.year = year
    }

    // as - принудительно приводит к типу
    return car as Car
}

//=================
// Readonly - изменить массив не получиться
const car: Readonly<string[]> = ['Ford', 'Audi']
// car.shift()
// car.unshift()

// Readonly - не можем изменить объект
const ford: Readonly<Car> = {
    model: 'Ford',
    year: 2017
}

// ford.model = 'Ferrari'
