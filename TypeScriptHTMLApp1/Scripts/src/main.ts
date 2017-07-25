/// <reference path="../typings/requirejs/require.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />

require.config({
    baseUrl: "Scripts",
    paths: {
        jquery: 'vendors/jquery/jquery-3.1.1',
        knockout: 'vendors/knockout/knockout-3.4.2.debug'
    },
    shim: {
        knockout: {
            exports: 'ko'
        },
        jquery: {
            exports: '$'
        }
    }
});

require(["app/app", "jquery", "knockout"], (gt, $, ko) => {
    // code from window.onload 
    $(document).ready(() => {        
        var greeter = new gt.Greeter('Peter', 'Vogel');
        greeter.start();

        ko.applyBindings(greeter);
    })  
});