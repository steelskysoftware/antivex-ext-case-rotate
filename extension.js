import vscode from 'vscode'

export function activate(context) {
  console.log('Antivex Case Rotate is activated, hold on to your butts.')

  let disposable = vscode.commands.registerCommand('antivex-case-rotate.trigger', function () {
    vscode.window.showInformationMessage('Case rotated')
  })

  context.subscriptions.push(disposable)
}

export function deactivate() {
  console.log('Antivex Case Rotate deactivated, you may let go of your butts.')
}
