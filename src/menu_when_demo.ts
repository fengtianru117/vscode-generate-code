import * as vscode from "vscode";

export function path(context: vscode.ExtensionContext) {
    console.log('进入了获取当前文件夹路径函数');
    let disposable = vscode.commands.registerCommand("extension.demo.getCurrentFilePath", (uri) => {
        console.log('展示 path infomation message');
        vscode.window.showInformationMessage(`当前文件(夹)路径是：${uri ? uri.path : '空'}`);
    });
    context.subscriptions.push(disposable);

}