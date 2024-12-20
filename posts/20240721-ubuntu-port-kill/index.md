---
title: "UbuntuでPortの切断方法"
description: "アプリを終了したのにPortが使われていたので切断方法を調べました。"
published_at: "2024-07-21"
modified:
published: true
tags: ["linux", "ubuntu"]
---

### プロセス中のポートを表示

```bash
lsof -i
```

### ポート番号を指定する

```bash
lsof -i :番号
```

### 切断方法

```bash
kill -9 PID
```

終了させるシグナルは複数ある

- -2: Ctrl + C で送信されるシグナル
- -9: プロセスを強制終了させます
- -15: プロセスに終了要求を送ります。プロセスは終了する前にクリーンアップ処理を行うことができます。

シグナル一覧の確認方法

```bash
kill -l
```
