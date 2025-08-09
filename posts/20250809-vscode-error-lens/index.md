---
title: "VSCodeでエラーを分かりやすくする"
description: "VSCodeの拡張機能で分かりやすくエラーを表示させる"
published_at: "2025-08-09"
modified:
published: true
tags: ["vscode"]
---

## Error Lens

![Image](/static/error-lens.png)

言語の診断結果を目立つように、その行全体をハイライト表示する拡張機能です。
この拡張機能を入れるだけで、エラー箇所がかなりわかりやすくなります。

### 有効/無効

```json
{
  // true:有効、false:無効
  "errorLens.enabled": false
}
```

### 表示するレベル

```json
{
  "errorLens.enabledDiagnosticLevels": ["info", "warning", "error"]
}
```

### フォントサイズ

```json
{
  "errorLens.fontSize": "0.9em"
}
```

### 特定のファイルは除く

```json
{
  "errorLens.excludePatterns": ["**/*.{ts,js}"]
}
```

### 特定の拡張機能の警告は無視する

たとえば`cSpell`も一緒に使っていると、エラーでもないのにハイライトが表示されるため、見にくくなります。
その対処法として、以下のように拡張機能の名前を記述すれば、警告は無視されます。

```json
{
  "errorLens.excludeBySource": ["cSpell"]
}
```

### 色のカスタマイズ

```json
{
  "workbench.colorCustomizations": {
    "errorLens.infoBackground": "#0000ff20",
    "errorLens.warningBackground": "#ffff0020",
    "errorLens.errorBackground": "#ff000020"
  }
}
```

## Statusbar error

![Image](/static/statusbar-error.gif)

こちらはエラーの表示を行全体ではなく、色付きの文字で表示します。

### エラー文字を表示/非表示

```json
{
  // true:表示、false:非表示
  "statusbarerror.wholeLine.show": false
}
```

### 左側のアイコンを表示/非表示

```json
{
  "statusbarerror.gutter.info.show": false,
  "statusbarerror.gutter.warning.show": false,
  "statusbarerror.gutter.error.show": false
}
```

### 背景色

```json
{
  "statusbarerror.wholeLine.warningColor": "#ffff0020",
  "statusbarerror.wholeLine.errorColor": "#ff000020"
}
```

### 文字色

```json
{
  "statusbarerror.wholeLine.warningFontColor": "#ffff0020",
  "statusbarerror.wholeLine.errorFontColor": "#ff000020"
}
```
