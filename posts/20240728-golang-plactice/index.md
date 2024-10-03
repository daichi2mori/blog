---
title: 'Go言語基礎'
description: 'Go言語ファイルの実行方法、ファイル分割、パッケージ、テスト、ビルドを学習しました。'
published: true
published_at: '2024-07-28'
modified:
---

## ファイル実行

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


## ファイル分割

- 同一パッケージ名で分割する場合

最初に宣言する`package`の名称を同じにします。今回だと`main`という名称で宣言しています。

パッケージ名が同じだと、関数名の最初の文字を大文字にしなくても大丈夫です。

```bash
project
 ├─ main.go
 └─ foo.go
```

```go title="main.go"
package main

func main() {
	foo()
}
```

```go title="foo.go"
package main

import "fmt"

func foo() {
	fmt.Println("foo")
}
```

これを実行するには、両方のファイル名を指定する必要があります。

```bash
go run main.go foo.go
```

- パッケージ名を分ける場合

モジュール管理用ファイルの`go.mod`を作成する必要があります。

`project`の部分はフォルダ名と違っていても大丈夫です。

```bash
go mod init project
```

```bash
project
 ├─ main.go
 ├─ bar
 │   └─ bar.go
 └─ go.mod
```

```go title="main.go"
package main

import (
	"project/bar"
)

func main() {
	bar.Bar()
}
```

パッケージ名が違うので、エクスポートするには関数名の最初の文字を大文字にする必要があります。これは変数名でも一緒です。

```go title="bar/bar.go"
package bar

import "fmt"

func Bar() {
	fmt.Println("Bar")
}
```

`go.mod`と同じ階層で以下コマンドを実行すると動作します。

```bash
go run main.go
```


## テスト

テスト用ファイル名は`xxx_test.go`のように、`_test`を付ける決まりがあります。

テストを行うためにも`go.mod`が必要なので以下コマンドで作成します。

```bash
go mod init test
```

```bash
project
 ├─ main.go
 ├─ main_test.go
 └─ go.mod
```

今回は以下の`IsOne`をテストします。1が来たらtrueを返し、それ以外だとfalseを返します。

```go title="main.go"
package main

import "fmt"

func IsOne(i int) bool {
	if i == 1 {
		return true
	} else {
		return false
	}
}

func main() {
	fmt.Println(IsOne(1))
	fmt.Println(IsOne(0))
}
```

テストには標準パッケージの`testing`を使用します。
`testing`にある`T`の`Errorf`というメソッドが実行されるとエラー扱いになります。

エラー時に表示される文言は`Errorf`の第一引数です。`%v`に渡したい値を入れることができます。

このテストは i が 1 以外だとif文内のエラーが発生しテストに失敗します。

```go title="main_test.go"
package main

import "testing"

func TestIsOne(t *testing.T) {
	i := 1
	v := IsOne(i)
	if !v {
		t.Errorf("%v != %v", i, 1)
	}
}
```

テストを実行するには以下コマンドです。

```bash
go test
```

成功すると、このような表示になります。

```bash
❯ go test
PASS
ok      27.test 0.100s
```

i が 0 だったらこのようなエラーが発生します。

```bash
❯ go test
--- FAIL: TestIsOne (0.00s)
    main_test.go:16: 0 != 1
FAIL
exit status 1
FAIL    27.test 0.103s
```

サブディレクトリにあるパッケージも一緒にテストするには`./...`を指定します。

```bash
go test ./...
```


## ビルド

- Mac

```bash
go build -o main main.go
```

- Windows

```bash
go build -o main.exe main.go
```

- Linux

```bash
GOOS=linux GOARCH=amd64 go build -o main main.go
```
