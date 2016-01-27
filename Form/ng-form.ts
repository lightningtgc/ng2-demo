
import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";
import {CORE_DIRECTIVES,FORM_DIRECTIVES} from "angular2/common";

//EzApp组件
@Component({
	selector:"ez-app",
	directives:[FORM_DIRECTIVES,CORE_DIRECTIVES],
	template:`
		<form #f="ngForm" (submit)="search(f.value)">
			<select>
				<option value="web">网页</option>
				<option value="news">新闻</option>
				<option value="image">图片</option>
			</select>
			<input type="text" ngControl="kw">
			<button type="submit">搜索</button>
		</form>
		<!--给个简单的反馈-->
		<h1 *ngIf="kw!=''">正在搜索 {{kw}} ...</h1>
	`,
	styles:[`form{background:#90a4ae;padding:5px;}`]            
})
class EzApp{
	constructor(){
		this.kw = "";
	}
	search(val){
		this.kw = val.kw;
		//假装在搜索，2秒钟返回
		setTimeout(()=>this.kw="",2000);
	}
}

bootstrap(EzApp);
