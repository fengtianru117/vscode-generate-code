import * as vscode from "vscode";
export function helloWorld() {
    console.log('进入了hello world函数');

    // let disposable = vscode.commands.registerCommand('vscode-generate-code.helloWorld', () => {
    //     // The code you place here will be executed every time your command is executed
    //     // Display a message box to the user
    //     console.log('展示hello world infomation message');
    //     const message = '你好世界 hello world';
    //     vscode.window.showInformationMessage(message);
    // });


    console.log('展示hello world infomation message');
    const message = '你好呀世界 hello world';
    vscode.window.showInformationMessage(message);
};