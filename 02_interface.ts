interface ISize {
    width: number,
    height: number
}

interface IRect {
    readonly id: string,
    color?: string,
    size: ISize
}

const rect1: IRect = {
    id: '123',
    size: {
        width: 20,
        height: 20
    }
}
rect1.color = 'black'

// Наследование
interface  IRectWithArea extends IRect {
    getArea: () => number
}

const rect2: IRectWithArea = {
    id: '123',
    size: {
        width: 20,
        height: 20
    },
    getArea() {
        return this.size.width * this.size.height
    }
}

// Когда все ключи одного типа
interface IStyles {
    [key: string]: string
}

const styles: IStyles = {
    border: '2px 1 solid',
    font: '14px',
    background: 'black'
}