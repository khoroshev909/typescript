interface Person {
    name: 'Eugene',
    age: 31
}

type keysOfPerson = keyof Person // 'name | 'age'

let key: keysOfPerson = 'name'
key = 'age'
// key = 'job' не валидно

type User = {
    _id: number,
    name: string,
    email: string,
    createdAt: Date
}

type userKeys = Exclude<keyof User, '_id' | 'createdAt'> // name | email

let key1: userKeys = 'name'
key1 = 'email'
// key1 = 'fgfdg'  invalid

// альтернативная запись, указываем поля которые нужно забрать
type userKeysNoMeta = Pick<User, 'name' | 'email'>



