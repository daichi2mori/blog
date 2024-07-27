---
title: 'Go言語の練習'
description: 'Go言語を新しく学んだ内容を書いていきます。'
published: '2024-07-15'
modified:
---

以下のコードでは、mainパッケージが宣言されており、その中のmain関数がエントリーポイントになっています。

`fmt`パッケージは、フォーマットされた文字列、数値などを出力します。
また入力の読み取りやフォーマットもサポートしています。

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello World")
}
```

> [!CAUTION]
> Go言語では`package main`で宣言されたパッケージ内のmain関数が必ずエントリーポイントになります。そのため`package test`などで宣言されているとエラーになります。また同一ファイル内に2つ以上のパッケージ宣言がある場合もエラーになります。

Goファイルをコマンドラインで実行する

```bash
go run main.go
```

### ビルド

**Mac**

```bash
go build -o main main.go
```

**Windows**

```bash
go build -o main.exe main.go
```

**Linux**

```bash
GOOS=linux GOARCH=amd64 go build -o main main.go
```
