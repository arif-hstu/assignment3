// github link will be here



function kilometerToMeter(kilometer) {
    //checking if the input is a valid number
    if (isNaN(kilometer) !== true && kilometer >= 0)  { 
        // defining the variables
        var meter = 0;

        // converting kilometer to meter
        meter = kilometer * 1000;

        return meter;

   } else {
        var errorText = 'Please input valid number(s)';
        return errorText;
   }
}

function budgetCalculator(clock, phone, laptop) {
    //checking if the inputs are valid number
    if (isNaN(clock) !== true && clock > 0 && isNaN(phone) !== true && phone > 0 && isNaN(laptop) !== true && laptop > 0)  { 
        // defining the variables
        var clockPrice = 0;
        var phonePrice = 0;
        var laptopPrice  = 0;
        var totalPrice = 0;

        // counting the price of clocks
        clockPrice = clock * 50;

        // counting the price of phones
        phonePrice = phone * 100;

        // counting the price of laptops
        laptopPrice = laptop * 500;

        // calculating the total price
        totalPrice = clockPrice + phonePrice + laptopPrice;

        return totalPrice;

    } else {
        var errorText = 'Please input valid price(s)';
        return errorText;
    }
}


function hotelCost(days) {
    
    if (isNaN(days) !== true && days > 0) {
        // defining the variables
        var firstCost = 0;
        var secondCost = 0;
        var thirdCost = 0;
        var totalCost = 0; 

        if(days <= 10) {  
            // if the days are under or equal 10
            totalCost = days * 100;

        } else if (days <= 20) {  
            // if the days are under or equal 20
            firstCost = 10 * 100;
            secondCost = (days-10) * 80;
            totalCost = firstCost + secondCost;

        } else {
            // if the days are over 20
            firstCost = 10 * 100;
            secondCost = 10 * 80;
            thirdCost = (days-20) * 50;
            totalCost = firstCost + secondCost + thirdCost;  
        }

        return totalCost;
        
        } else {
            var errorText = 'Please input valid day(s)';
            return errorText;
        }
    
}


function megaFriend(friendsArray) {
    // defining the variables
    var temp = 0;

    for(var i = 0; i < friendsArray.length; i++) {
        if (temp < friendsArray[i].length) {
            temp = friendsArray[i].length;
            var name = friendsArray[i];
        }
    }

    return name;
}


console.log(hotelCost(0));