let coffee = {
    "shop" : "Starbucks",
    "type" : "latte",
    "details" : {
        "shots" : "Two",
        "milk" : "Oat"
    },
    "sizes" : [
        "tall",
        "grande",
        "venti",
        "trenta",
    ]
}

$(function () {
    $("btnSubmit").click(function () {
    showCoffeeInfo();
});

});

function showCoffeeInfo()
{
    $("#coffeeInformation").html("Shop: " + coffee.shop
    + "<br>Type:" + coffee.type + "<br>Number of Shots:" + coffee.details.shots + "<br> Milk:" 
    + coffee.details.milk + "<br>Sizes Available:<br>" +
    coffee.sizes[0] + "<br>" + coffee.sizes[1] + "<br>" + coffee.sizes[2] + "<br>" + coffee.sizes[3]);
}
