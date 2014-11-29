/**
 * Created by Elmar <a.k.a. Ramires> Abdurayimov on 11/29/14 4:05 PM
 * @copyright (C)Copyright 2014 e.abdurayimov@gmail.com
 */

(function () {
    var app = angular.module('store', []);

    app.controller('StoreController', function () {
        this.products = gems;
    });

    var gems = [
        {
            name       : "Dodecahedron",
            price      : 2.95,
            description: '. . .',
            canPurchase: true
        },
        {
            name       : "Pentagonal Gem",
            price      : 5.95,
            description: '. . .',
            canPurchase: false
        }
    ];
})();

