
class Counter {
    constructor(value) {
        this.number = value;
        // this.Initialize(value);
    }

    Initialize (value = 0) {
        this.number = value;
    }

    // get number() {
    //     return this.number;
    // }
    
    // set number(value) {
    //     this.number = value;
    // }

    Increment () {
        this.number++
    }

    Go () {
        var numbers = []
        for (var i = 0; i <= this.number; i++){
            numbers[i] = i
            console.log(i)   
        }
        return numbers
    }
}

counter = null

function start() {
    if (counter == null && document.getElementById("counter").value != "") {
        counter = new Counter(document.getElementById("counter").value)
    } else {
        alert("stop")
    }
}

function add(){
    counter.Increment()
    document.getElementById("counter").value = counter.number
}

function show(){
    document.getElementById("print").innerHTML = ""
    for (item in counter.Go()){
        document.getElementById("print").innerHTML+= item + ","
    }
}