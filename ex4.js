
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
        return [this.x,this.y]
    }
}

function checkArrForPointXY(arr, x , y) {
    for (let tempP of arr) {
        if (tempP.x == x && tempP.y == y) {
            return true
        }
    }
    return false
}

function checkArrForPoint(arr, p) {
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

function Start() {
    $("body").append("<p>For The Examples we will use The next Array:</p>")
    arr = [new Point(1, 3), new Point(2,4), new Point(1,9), new Point(7, 23)]
    for (let i of arr) {
        $("body").append(`(${i.Show()}) `)
    }
    $("body").append("<p>Check Array For Point with X and Y:</p>")
    $("body").append("<p>Result Of checkArrForPointXY(arr, 1, 3) in our array</p>")
    $("body").append(checkArrForPointXY(arr, 1, 3))
    $("body").append("<p>Result Of checkArrForPointXY(arr, 1, 4) in our array</p>")
    $("body").append(`${checkArrForPointXY(arr, 1, 4)}`)
    $("body").append("<p>Check Array For Point with Point Object:</p>")
    $("body").append("<p>Result Of checkArrForPoint(arr, 1, 3) in our array</p>")
    $("body").append(checkArrForPoint(arr, new Point(1,3)))
    $("body").append("<p>Result Of checkArrForPoint(arr, 1, 4) in our array</p>")
    $("body").append(`${checkArrForPointXY(arr, new Point(1,4))}`)
    $("body").append("<p>Find A Path Of Points:</p>")
    $("body").append("<p>Result Of findPath(arr)</p>")
    $("body").append(findPath(arr))
}

console.log("For The Examples we will use The next Array:")
arr = [new Point(1, 3), new Point(2,4), new Point(1,9), new Point(7, 23)]
console.log(arr)
console.log("Check Array For Point with X and Y:")
console.log("Result Of checkArrForPointXY(arr, 1, 3) in our array")
console.log(checkArrForPointXY(arr, 1, 3))
console.log("Result Of checkArrForPointXY(arr, 1, 4) in our array")
console.log(checkArrForPointXY(arr, 1, 4))
console.log("Check Array For Point with Point Object:")
console.log("Result Of checkArrForPoint(arr, new Point(1,3)) in our array")
console.log(checkArrForPoint(arr, new Point(1,3)))
console.log("Result Of checkArrForPoint(arr, new Point(1,4)) in our array")
console.log(checkArrForPointXY(arr, new Point(1,4)))
console.log("Find A Path Of Points:")
console.log("Result Of findPath(arr)")
console.log(findPath(arr))