/**
 * Created by Elmar <a.k.a. Ramires> Abdurayimov on 11/29/14 4:27 PM
 * @copyright (C)Copyright 2014 e.abdurayimov@gmail.com
 */

(function () {
    var app = angular.module('gemStore', []);

    app.controller('StoreController', function () {
        this.products = gems;
    });

    var gems = [
        {name: 'Azurite', price: 2.95},
        {name: 'Bloodstone', price: 5.95},
        {name: 'Zircon', price: 3.95},
    ];
})();
