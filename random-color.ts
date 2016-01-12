import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";

// Make color of words change every second. 
@Component({
	selector:"my-app",
	template:`<h1 [style.color]="color">Hello,Angular2</h1>`
	// template:`<h1 bind-style.color="color">Hello,Angular2</h1>` 
	// bind- 可以替换中括号[],若为字符串常量等，可直接去除[],或字符串再增加引号[constant]="'string'""
})
class MyApp{
	constructor(){
      	setInterval(()=>{
          this.color = '#'+Math.floor(Math.random()*16777215).toString(16);
        }, 1000);
	}
}
		
bootstrap(EzApp);
