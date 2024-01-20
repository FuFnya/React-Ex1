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
    const audio = new Audio("../quack.mp3");
    playSound("../quack.mp3", 3)
    let timesToQuack = (this.age * this.weight) / 2;
    return  "Quack! ".repeat(timesToQuack);
  }
}

const playSound = (audioURL, playCount = 1) => {

  const audioContext = new AudioContext();   
  audioContext.resume();

  const audioClip = new Audio(audioURL);

  const audioClipDuration = 2000;
  audioClip.loop = true;
  setTimeout(() => audioClip.loop = false, (audioClipDuration * (playCount - 1)));
  audioClip.play();
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
