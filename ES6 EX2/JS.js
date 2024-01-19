class Duck {
  constructor(name, color, age, weight, pic) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.weight = weight;
    this.pic = pic;
  }

  Show() {
    return (
      "Duck info: " +
      this.name +
      " " +
      this.color +
      " " +
      this.age +
      " " +
      this.weight +
      " " +
      this.pic
    );
  }

  Quack() {
    let timesToQuack = (this.age * this.weight) / 2;
    return  "Quack! ".repeat(timesToQuack);
  }
}

$(document).ready(() => {
  $("#myForm").submit((event) => {
    event.preventDefault(); // Prevent the form from submitting normally

    Submitted();
  });
});

function Submitted() {
  myDuck = new Duck( $("#name").val(), $("#color").val(), $("#age").val(), $("#weight").val(), $("#pic").val() );

  $("#subBtn").prop("disabled", true);
  console.log(Duck);
  $("#hiddenDiv").css("visibility", "visible");
}
function showDuck() {
  $("#dispDiv").html("");
  $("#dispDiv").html(myDuck.Show());
}

function Quack(){
  $("#dispDiv").html("");
  $("#dispDiv").html(myDuck.Quack());
}
