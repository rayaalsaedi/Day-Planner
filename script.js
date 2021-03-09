$(document).ready(function (){


//create date and append to html page
var today=moment().format('MMMM Do YYYY');
console.log(today)
$("#currentDay").append(today);
var saveBtn=$(".saveBtn")

saveBtn.on("click", saveValue )

function saveValue (){
var inputValue= $(this).siblings(".timeValue").val()
console.log(inputValue)
var key=$(this).parent().attr("value")
console.log(key)
localStorage.setItem(key,inputValue)
}
function getValue(){
    var timeBlock=$(".time-block")
    timeBlock.each(function(){
        var value=$(this).attr("value")
        var getLocalStorage=localStorage.getItem(value)
        $(this).children(".timeValue").val(getLocalStorage)
    })
}
getValue()


})
//colorCode
function colorCode(){

    var currentTime=moment().hour();
    var compareHour=parseInt($(this).attr("id").split("-"));
if ($(this).addClass("past"));
}
colorCode()

