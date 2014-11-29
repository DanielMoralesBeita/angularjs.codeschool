/**
 * Created by Elmar <a.k.a. Ramires> Abdurayimov on 11/29/14 4:27 PM
 * @copyright (C)Copyright 2014 e.abdurayimov@gmail.com
 */

(function () {
    var gem = {name: 'Azurite', price: 2.95};
    var app = angular.module('gemStore', []);

    app.controller('StoreController', function () {
        this.product = gem;
    });

})();
