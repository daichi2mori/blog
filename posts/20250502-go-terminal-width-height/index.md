---
title: "Go言語でターミナルの幅と高さを取得する方法"
description: "Go言語でターミナルの幅を取得する方法"
published_at: "2025-05-02"
modified:
published: true
tags: ["golang"]
---

まず以下のモジュールを取得します。

```bash
go get golang.org/x/term
```

`GetSize`関数を使うことでターミナルの幅と高さを取得することができます。

```go
package main

import (
	"fmt"
	"syscall"

	"golang.org/x/term"
)

func main() {
	width, height, err := term.GetSize(syscall.Stdin)
	if err != nil {
		fmt.Println("エラー:", err)
		return
	}

	fmt.Printf("幅: %d, 高さ: %d\n", width, height)
}
```
