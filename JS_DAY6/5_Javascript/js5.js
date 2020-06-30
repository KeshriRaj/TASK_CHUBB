// Callback Task 
// Write a Program to print a Countdown in console from 10 to 1.. and finally print "Happy Birthday" 
//  Rule ​: Don't use setInterval, Don't use a named function.  
// You can use setTimeout multiple time nested  -->

let x=10
setTimeout(function()
{
    console.log(x)
    x--;
    setTimeout(function()
    {
        console.log(x)
        x--;
        setTimeout(function()
        {
            console.log(x)
            x--;
            setTimeout(function(){
                console.log(x)
                x--;
                setTimeout(function(){
                    console.log(x)
                    x--;
                    setTimeout(function(){
                        console.log(x)
                        x--;
                        setTimeout(function(){
                            console.log(x)
                             x--;
                             setTimeout(function()
                             {
                                console.log(x)
                                x--;
                                setTimeout(function()
                                {
                                    console.log(x)
                                    x--;
                                    setTimeout(function()
                                    {
                                        console.log(x)
                                        x--;
                                        setTimeout(function()
                                        {
                                            console.log("Happy Birthday")
                                        },500)
                                    },1000)
                                },1000)
                             },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)
