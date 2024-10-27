---
title: "WindowsにSQLite3をインストールする方法"
description: "Go言語の学習にSQLite3を使おうと思ったので、インストールの流れを書きました。"
published_at: "2024-07-29"
modified:
published: true
tags: ["windows", "sqlite"]
---

## SQLite3 のインストール

今回は`winget`を使用します。

```bash
winget install --id SQLite.SQLite
```

インストール後、sqlite3 が

```bash
sqlite3
```

すると以下のように表示される

```bash
❯ sqlite3
SQLite version 3.46.0 2024-05-23 13:25:27 (UTF-16 console I/O)
Enter ".help" for usage hints.
Connected to a transient in-memory database.
Use ".open FILENAME" to reopen on a persistent database.
sqlite>
```

## GCC のインストール

gcc は winget でインストールできないみたいなので、公式サイトからダウンロードします。

[https://jmeubank.github.io/tdm-gcc/](https://jmeubank.github.io/tdm-gcc/)

画面左側にある`MinGW-w64 based`の EXE ファイルをダウンロードします。

![gccのインストール場所](/static/gcc.avif)

ダウンロード後、EXE ファイルを起動するとセットアップ画面が開きますので、「Create」をクリックします。

![gccのセットアップ](/static/gcc-setup.avif)

64bit が選択されていることを確認してから「Next」をクリックします。

![gccのインストールbit](/static/gcc-64bit.avif)

インストール先は特に理由がなければ C ドライブにインストールするのがいいと思います。

![gccのインストール先](/static/gcc-install-directory.avif)

インストールするコンポーネントはデフォルトのままで大丈夫です。

![gccのインストールするコンポーネント](/static/gcc-install-components.avif)

インストール完了後ターミナルを再起動してから、gcc のインストール確認をします。

```bash
gcc --version
```

以下のように表示されれば成功です。

```bash
❯ gcc --version
gcc.exe (tdm64-1) 10.3.0
Copyright (C) 2020 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```

## その他

もし`CGO_ENABLED=0`というエラーが発生した場合は以下コマンドを実行する

```bash
set CGO_ENABLED=1
```
