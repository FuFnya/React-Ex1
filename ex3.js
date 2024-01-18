
class Clock {
    constructor(hours, minutes, seconds, country) {
        this.hours = hours
        this.minutes = minutes
        this.seconds = seconds
        this.country = country
    }


    ConverToSeconds () {
        return this.hours*3600+this.minutes*60+Number(this.seconds)
    }

    Show () {
        let t = ("0" + this.hours).slice(-2) + ":" 
            + ("0" + this.minutes).slice(-2) + ":"
            + ("0" + this.seconds).slice(-2)
        return t
    }
}

$(function(e) {
    $("#form").on("submit", check)
})

listClocks = []

function check(){
    let clock = new Clock(
        $("#hours").val(),
        $("#minutes").val(),
        $("#seconds").val(),
        $("#country").val()
    )
    listClocks.push(clock)

    if (listClocks.length <= 4) {
        $("#seconds").val("")
        $("#minutes").val("")
        $("#hours").val("")
        $("#country").val("")
    } else {
        $("#seconds").val("")
        $("#minutes").val("")
        $("#hours").val("")
        $("#country").val("")
        
        $("body").append("<div id='container'></div>")
        
        for (var i of listClocks) {
            $("#container").append(`<p>Name: ${i.country} Time: ${i.Show()} Seconds: ${i.ConverToSeconds()}</p>`)
        }
    }
    return false
}

