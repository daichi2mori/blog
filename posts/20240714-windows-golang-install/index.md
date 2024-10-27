---
title: "WindowsにGo言語をインストール"
description: "Go言語をWindowsにインストールする方法です。"
published_at: "2024-07-14"
modified:
published: true
tags: ["windows", "golang"]
---

## はじめに

インストール先のパスに空白が入っていると予期せぬ動作が発生する可能性があるみたいなので、Windows 標準のインストール先「C:\program Files」ではなく、新しく「lang」ディレクトリを作成しています。

## インストール

Windows 標準のパッケージマネージャーの`winget`を使用します。

Go 言語は`winget`の`--location`オプションを無視するため、`--override`オプションと`INSTALLDIR`変数を使用します。

```bash
winget install GoLang.Go --override "INSTALLDIR=C:\\lang\\go"
```

コマンドを実行すると Go 言語のインストーラーが起動するので、すべて YES を押して最後に Install をクリックします。

## 環境変数の確認

1. 「システム環境変数の編集」を起動させる

![システム環境変数の編集](/static/search-env.avif)

2. システムのプロパティから「環境変数」ボタンをクリックする

![システムのプロパティ](/static/system-property.avif)

3. ユーザー環境変数に「GOPATH」があることを確認する

![GOPATHの確認](/static/confirm-user-go-path.avif)

4. ユーザー環境変数内の「Path」欄を選択し、編集ボタンをクリックする

![編集ボタンをクリック](/static/user-path-click.avif)

5. 環境変数名に「%USERPROFILE%\go\bin」があることを確認する

![編集ボタンをクリック](/static/confirm-user-go-path-env.avif)

6. 前の画面に戻り、次は「システム環境変数」内の「Path」を選択し、編集ボタンをクリックする

![編集ボタンをクリック](/static/sys-path-click.avif)

7. こちらの環境変数名に「C:\lang\go\bin」があることを確認する

![編集ボタンをクリック](/static/confirm-sys-go-path-env.avif)

## go コマンドの実行

パスが正常に通っているか、バージョン確認するコマンドを実行して確認します。

```bash
go version
```

以下のようにバージョンが表示されれば成功です。

```bash
❯ go version
go version go1.22.4 windows/amd64
```
