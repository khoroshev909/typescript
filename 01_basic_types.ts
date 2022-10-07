const bool: boolean = true
const str: string = 'string'
const num: number = 42

// массивы с одним типом
const arr1: number[] = [1, 1, 2, 3, 5, 8]
const arr2: string[] = ['Hello', 'TS']
const arr3: Array<number> = [1, 1, 2, 3, 5, 8]

// tuple - массивы с разными типами
const contact: [string, number] = ['Eugene', 12345]

// any - можно переопределять
let any: any = 'string'
any = 42

function sayMyName(name: string) :void {
    console.log(name)
}

// never - когда функция возвращает ошибку либо бесконечная
function throwError(): never {
    throw new Error()
}

//type
type Login = string // alias для типа
const login: Login = 'Eugene'

//type - если значение может быть из двух и более типов
type ID = string | number

// если undefined или null
type undef = string | null | undefined



