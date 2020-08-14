import * as vscode from "vscode";
export function editor(textEditor: any, edit: any) {
    console.log("您正在执行编辑器命令");
    console.log(textEditor, edit);
}