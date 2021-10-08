//check off specific todos by clicking
$("ul").on("click", "li", function(){
    // // if the li is gray turn it in to black
    // if ($(this).css("color") === "rgb(128, 128, 128)") //color names will not work in these if statements it has to be rgb values to comapre in if statements.
    // {
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none"     
    //     });
    // }
    // //this is to turn it gray
    // else {
    //     $(this).css({
    //         color: "gray",
    //         textDecoration: "line-through"     
    //     });
    // }

    //this line of code can replace long line of code using if and else statements
    $(this).toggleClass("completed");
});

//Click on X to delete todo
$("ul").on("click", "span",function(){
    $(this).parent().fadeOut(500, function(){ //this keyword in this line of code refers to span we clicked
        $(this).remove(); //this keyword in this line code refers to parent of the span we clicked on which is li
    });
    //event.stopPropagation();//this code is to stop event bubbling issue.
});

//type text to be added in todo list
$("input[type='text'").keypress(function(event){
    if(event.which === 13){
        //grabbing new text value from text input to add in the list
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-minus'></i></span>" + todoText + "</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle();
});