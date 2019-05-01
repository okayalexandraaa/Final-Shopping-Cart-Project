    var itemNames=[];
    var itemPrices=[];


$(".newItem").click(function(){
   var price = $(".itemPrice").val();
   var name=$(".itemName").val();
   var image=$(".itemImage").val();
    
    $(".cart").append("<div class='item'><div class='format'><p>"+name+"</p><img src="+image+"></div><p>$"+price+"</p></div>");
    itemPrices.push(price);
    console.log(itemPrices);
    itemNames.push(name);
    console.log(itemNames);
});

$(".purchase").click(function(){
    var all = 0;
     itemPrices.forEach(function(cost){
        all = all + parseInt(cost);
        console.log(all);
     });
     var numItems=itemNames.push();
     $(".total").text("Total:"+all+"");
     $(".number").text("Items in Cart:"+numItems+"");
});


