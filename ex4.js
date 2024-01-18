
class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    Equal(p) {
        if (p.x == this.x && p.y == this.y) {
            return true
        } else return false
    }

    Show () {
        return (this.x,this.y)
    }
}

arr = [new Point(1, 3), new Point(2,4), new Point(1,9), new Point(7, 23)]

function checkArrForPointXY(arr, x , y) {
    for (let tempP of arr) {
        if (tempP.x == x && tempP.y == y) {
            return true
        }
    }
    return false
}

function checkArrayForPoint(arr, p) {
    for (let tempP of arr) {
        if (p.Equal(tempP)) {
            return true
        }
    }
    return false
}

function findPath(arr) {
    let path = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i+1] == null) {
            return path
        } else {
            path += Math.sqrt((arr[i].x - arr[i+1].x)**2 + (arr[i].y - arr[i+1].y)**2)
        }
    }
}

