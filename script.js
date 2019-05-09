$("#submit").click(function (){
    detectMood($("#mood").val());    
});

function detectMood(mood){
    mood = mood.toLowerCase();
    if(mood === "stressed"){
        stressed();
    }
    
    else if(mood === "fleetingly happy"){
        fleetinglyHappy();    
    }
    
    else if(mood === "discontented"){
        discontented();    
    }
}

function stressed(){
    addPhotos(["https://cdn.mindful.org/2015/06/stress_feature.png?q=80&fm=jpg&fit=crop&w=1400&h=875", "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Ftimedotcom.files.wordpress.com%2F2018%2F11%2Fstress-benefits.jpg&w=800&c=sc&poi=face&q=85"]);
    changeText("red", "kranky");
    changeBackground("black");
    headerText("STRESSED");
}

function fleetinglyHappy(){
    addPhotos(["https://previews.123rf.com/images/zmijak/zmijak1306/zmijak130600013/20142942-hands-of-young-children-reaching-for-red-balloon.jpg", "https://donnabond.com/wp-content/uploads/2018/08/Happiness-Through-Pursuit-is-Fleeting_post.jpg"]);
    changeText("white", "cabin sketch");
    changeBackground("#fdff9e");
    headerText("fleetingly happy");
}

function discontented(){
    changeBackground("#7c7c7c");
    headerText("discontented");
    changeText("black", "Londrina Outline");
}

function addPhotos(Photos){
    Photos.forEach(function (photo){
        $("#photos").append("<img src=\"" + photo +"\">");
    });
}

function changeText(textcolor, font){
    $("body").css("color", textcolor);
    $("body").css("font-family", font);
}

function changeBackground(color){
    $("body").css("background-color", color);
}

function headerText(text){
    $("#emotion").text(text);
}