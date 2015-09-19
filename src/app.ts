/// <reference path="_references.ts" />

import {Component, View, bootstrap} from "angular2/angular2";

namespace Test {
    @Component({
        selector: 'app'
    })

    @View({
        template: '<h1> Hello World! Welcome {{name}}</h1>',
    })

    export class App {
        name : string;
        constructor() {
            this.name = "Aravind";
        }
    }

}

export function main(){
	bootstrap(Test.App);
}
