var rect1 = {
    id: '123',
    size: {
        width: 20,
        height: 20
    }
};
rect1.color = 'black';
var rect2 = {
    id: '123',
    size: {
        width: 20,
        height: 20
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
var styles = {
    border: '2px 1 solid',
    font: '14px',
    background: 'black'
};
var rect4 = {};
rect4.color = 'fgdfg';
console.log(rect4);
console.log(typeof rect4);
