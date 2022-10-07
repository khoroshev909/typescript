interface IPosition {
    x: number | undefined
    y: number | undefined
}

interface IPositionWithDefault extends IPosition {
    default: string
}

function myPosition() : IPosition
function myPosition(a: number) : IPositionWithDefault
function  myPosition(a: number, b:number) : IPosition

function myPosition(a?: number, b?: number) {
    if (!a && !b) {
        return {
            x: undefined,
            y: undefined
        }
    }

    if (a && !b) {
        return {
            x: a,
            y: undefined,
            default: a.toString()
        }
    }

    if (a && b) {
        return {
            x: a,
            y: b
        }
    }
}