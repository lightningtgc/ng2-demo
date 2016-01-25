import {Component,Pipe} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";

// name为管道名称，class名需要pipes进行引入
@Pipe({name:"title"})
class TitlePipe{
	transform(input,args){
		return input.split(" ")
				.map(word => word[0].toUpperCase() + word.slice(1))
				.join(" ");
	}
}

@Pipe({name:"reverse"})
class ReversePipe{
	transform(input){
    	return input.split("").reverse().join("");
    }
}

@Component({
	selector:"ez-app",
	template:`	
		<h1>自定义管道/Pipe</h1>
		<p>{{text | title}}</p>
		<p>{{rText | reverse}}</p>
	`,
	pipes : [TitlePipe, ReversePipe]
})
class EzApp{
	constructor(){
		this.text = "what a wonderful world!";
      	this.rText = "12345abcdef";
	}
}
		
bootstrap(EzApp);
