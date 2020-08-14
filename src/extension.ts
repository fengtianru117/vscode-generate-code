// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { helloWorld } from "./hello_world_demo";
import { path } from "./menu_when_demo";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(ctx: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "vscode-generate-code" is now active!');

	helloWorld(ctx); // hello world 
	path(ctx); // menu when

}

// this method is called when your extension is deactivated
export function deactivate() {
	console.log('插件已被释放!');
}
