/**
 * 环境声明
 * 
 * 环境声明允许在TypeScript 代码中创建一个不会被编译到 JavaScript中的变量。这个特性是用来促进与现有 JavaScript 代码、DOM（文档对象模型），还有BOM（浏览器对象模型）结合而设计的。让我们看一个例子：
 * 
 * 	customConsole.log("A log entry!"); // 错误
 * 	如果你尝试调用customConsole对象上的log方法，TypeScript会告诉我们customConsole对象未被声明：
 * 
 * 	// Cannot find name 'customConsole'
 * 	出现这种情况并不令人意外。但是，有时候我们希望调用一个未被定义的对象上的方法，比如window对象上的console方法。 * 
 * 
 * 	console.log("Log Entry!");
 * 	var host = window.location.hostname;
 * 	当访问 DOM 或 BOM 对象时，我们没有遇到错误，是因为这些对象已经在一个特殊的 TypeScript 文件（被称为声明文件）中被声明了。可以使用declare操作符创建一个环境声明。
 * 
 * 	在下面这段代码中，我们会声明一个被customConsole对象实现的接口。然后使用declare操作符在作用域中增加一个customConsole对象：
 * 
 * 	interface ICustomConsole {
 * 	  log(arg : string) : void;
 * 	}
 * 	declare var customConsole : ICustomConsole;
 * 	然后就可以在没有编译错误的情况下使用customConsole：
 * 
 * 	customConsole.log("A log entry!"); // 成功
 * 	TypeScript 默认包含一个名为lib.d.ts的文件，它提供了像 DOM 这种 JavaScript 内置库的接口声明。
 * 
 * 	使用.d.ts结尾的声明文件，是用来提高 TypeScript 对第三方库和像 Node.js 或浏览器这种运行时环境的兼容性的。
 */

declare var ENV: string;
declare var process: {env: {NODE_ENV: ''}};