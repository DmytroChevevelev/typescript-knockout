///<reference path="../typings/requirejs/require.d.ts" />
///<reference path="../typings/knockout/knockout.d.ts" />

//export module TSTEST {
    export class Greeter {
        element: HTMLElement;
        span: HTMLElement;
        timerToken: number;
        public firstName: string;
        public lastName: string;
        public timeValue: KnockoutObservable<string>;
        ko: any;

        constructor(fNmae: string, lName: string) {
            this.ko = require('knockout');
            this.firstName = fNmae;
            this.lastName = lName;
            this.timeValue = this.ko.observable(new Date().toUTCString());
        }

        start() {
            this.timerToken = setInterval(() => {                
                this.timeValue(new Date().toUTCString());
            }, 500);
        }

        stop() {
            clearTimeout(this.timerToken);
        }  
    }   
//}

