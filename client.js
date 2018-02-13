/* global angular */  //this is client side js aka front end

(function(){
var app = angular.module('store', []); 

app.controller('StoreController', function() {
    this.products = cars;
});

app.controller('PanelController', function() {
    this.tab = 1; //starts with the active tab being the 1st
    
    this.selectTab = function(setTab) {
        this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
        return this.tab === checkTab;
    }
    
// function rentcar() {
//     for (var i = 0; i< cars.length; i++)
//     if ({{product.amountAvailable}} === 0) {
//         alert("No cars available!");
//         return false;
//     } else if ({{product.amountAvailable > 0}}) {
//         {{product.amountAvailable--}};
//     }
// }    

    
});

var cars = [
{
    name: 'Honda Civic',
    price: 75,
    description: '4 Door Car With Great Gas Mileage',
    type: 'Sedan',
    images: 'Honda.jpg',
    specifications: 'Some Information about HP, Insurance Costs, Etc.',
    canRent: true,
    soldOut: false,
    amountAvailable: 20

},
{
    name: 'Chevy Silverado',
    price: 100,
    description: 'Truck is Spacious, Fits 5-Passengers and With Full Bed',
    type: 'Truck',
    images: 'Chevy.jpg',
    specifications: 'Some Information about HP, Insurance Costs, Etc.',
    canRent: true,
    soldOut: false,
    amountAvailable: 15
},
{
    name: 'BMW',
    price: 200,
    description: 'Top Notch Luxury Vehicle With Superb Amenities',
    type: 'Sports Car',
    images: 'BMW.jpg',
    specifications: 'Some Information about HP, Insurance Costs, Etc.',
    canRent: false,
    soldOut: true,
    amountAvailable: 0

},
];

})();