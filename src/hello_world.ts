import * as vscode from "vscode";
export function name(context: vscode.ExtensionContext) {
    console.log('进入了函数');

    let disposable = vscode.commands.registerCommand('vscode-generate-code.helloWorld', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window.showInformationMessage('分模块的hello world');
    });

    context.subscriptions.push(disposable);
};