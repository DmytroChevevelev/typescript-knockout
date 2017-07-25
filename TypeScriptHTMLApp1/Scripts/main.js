require.config({
    baseUrl: "./scripts",
    paths: {
        jquery: './vendors/jquery/jquery-3.1.1',
        knockout: './vendors/knockout/knockout-3.4.2',
        app: "./app"
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

require(['app/app','jquery', 'knockout'], (g, $, ko) =>{
    $(document).ready(() => {
        var el = $('#content');
        var greeter = new TSTEST.Greeter(ko, 'Peter', 'Vogel');
        greeter.start();

        ko.applyBindings(greeter);
    })    
});