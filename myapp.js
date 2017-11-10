// Initialize your app
var myApp = new Framework7({
    modalTitle: 'Kul App ', 
    pushState: true,
    material:true
    
    });

// Export selectors engine
var $$ = Dom7;

$$('#smile').on('click', function () {
    
        myApp.alert('Successfully registered!');
    
});

var mainClass = function()
{
    this.initializeApp = function()
    {
        var mainView = myApp.addView('.view-main');
    }
}
m = new mainClass();
m.initializeApp();

