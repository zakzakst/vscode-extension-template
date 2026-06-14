import * as vscode from "vscode";

export const contextSampleDisposable = vscode.commands.registerCommand(
  "vscode-extension-template.context-sample",
  () => {
    vscode.window.showInformationMessage("右クリック コマンドサンプル");
  },
);
