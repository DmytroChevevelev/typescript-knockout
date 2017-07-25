///<reference path="../typings/jquery/jquery.d.ts" />
///<reference path="../typings/knockout/knockout.d.ts" />

module TSTEST {
    export class Greeter {
        element: HTMLElement;
        span: HTMLElement;
        timerToken: number;
        public firstName: string;
        public lastName: string;
        public timeValue: KnockoutObservable<string>;

        constructor(ko: any, fNmae: string, lName: string) {           
            
            this.firstName = fNmae;
            this.lastName = lName;
            this.timeValue = ko.observable(new Date().toUTCString());
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
}

