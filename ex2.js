

// class Duck {
//     constructor(name, color, age, weight, pic) {
//         this.name = name
//         this.color = color
//         this.age = age
//         this.weight = weight
//         this.pic = pic
//     }

//     Show () {
//         return {"Name": this.name, "Color": this.color, "Age": this.age, "Weight": this.weight, "Pic": this.pic}
//     }

//     Quack() {
//         quacks = []
//         for (var i = 0; i < (this.weight*this.age)/2; i++){
//             quacks[i] = "Quack"
//         }
//         for (var i = 0; i < 3; i++){
//             audio.play()
//         }
//         return quacks
//     }

// }

// const audio = new Audio("quack.mp3");
// //audio.play()
// var duck = null

// // $(document).ready(function(e) {
// //     $("#form").on("submit", check)
// // })

// $(function(e) {
//     $("#form").on("submit", check)
// })

// function check(){
//     duck = new Duck(
//         $("#name").val(),
//         $("#color").val(),
//         $("#age").val(),
//         $("#weight").val(),
//         $("#pic").val()
//     )
//     // $("body").append("")
//     return false
// }

// function show(){
//     for ([x,y] of Object.entries(duck.Show())) {
//         console.log(x,y)
//     }
// }
// function quack(){
//     for (x of duck.Quack()) {
//         console.log(x)
//     }
// }

// // $(document).on('submit',function (e) {
// //     $("#form").append("aaaaa")
// //     return
// // });


const audio = new Audio("quack.mp3");
function quack(){
        audio.play()
}