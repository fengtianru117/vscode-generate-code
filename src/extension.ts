// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { helloWorld } from "./hello_world_demo";
import { path } from "./menu_when_demo";
import { editor } from "./editor_demo";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(ctx: vscode.ExtensionContext) {

	ctx.subscriptions.push(vscode.commands.registerCommand("extension.demo.getCurrentFilePath", (uri) => path(uri))); // menu when

	ctx.subscriptions.push(vscode.commands.registerCommand('vscode-generate-code.helloWorld', () => helloWorld())); // hello world

	ctx.subscriptions.push(vscode.commands.registerTextEditorCommand("extension.testEditorCommand", (textEditor, edit) => editor(textEditor, edit)));
}

// this method is called when your extension is deactivated
export function deactivate() {
	console.log('插件已被释放!');
}
