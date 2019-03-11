
$("button").click(function(){
    var height=$(".height").val();
    var dunk=$(".dunk").val();
if(height>78 && dunk==="can"){
    $(".results").text("your a center");
    
   
} else if (height>78 && dunk==="can"){
    $(".results").text("your a power forward");

} else if (height>78 && dunk==="can't"){
    $(".results").text("your a shooting guard");
    
} else if (height<78 && dunk==="can't"){
    $(".results").text("your a point guard");

} else if (height<78 && dunk==="can"){
    $(".results").text("your a small forward");
    
}
});