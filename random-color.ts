import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";

@Component({
	selector:"my-app",
	template:`<h1 [style.color]="color">Hello,Angular2</h1>`
})
class MyApp{
	constructor(){
      	setInterval(()=>{
          this.color = '#'+Math.floor(Math.random()*16777215).toString(16);
        }, 1000);
	}
}
		
bootstrap(EzApp);
