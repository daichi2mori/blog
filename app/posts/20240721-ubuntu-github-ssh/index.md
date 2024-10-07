---
title: 'UbuntuでGitHubにSSH接続'
description: '新しくUbuntu環境を入手したので、GitHubにSSHで接続する流れを書きました。'
published: '2024-07-21'
modified:
---

1. ユーザー情報の登録

```bash
git config --global user.name "ユーザー名"
git config --global user.email "メールアドレス"
```

登録の確認

```bash
git config user.name
git config user.email
```


2. 公開鍵・秘密鍵の発行

以下のコマンドを実行すると保存場所やパスワードの確認画面が表示されますが、すべてEnterでOKです。

```bash
ssh-keygen -t rsa
```

以下コマンドで、`id_rsa`と`id_rsa.pub`が生成されていることを確認

```bash
ls ~/.ssh
```


3. 公開鍵をGitHubに登録

GitHubの右上のアイコンをクリックし、「Settings」ページに遷移します。
その後左メニューに「SSH and GPG keys」があるのでクリックします。
すると「New SSH key」ボタンがあるのでクリックします。

![ssh page](/static/ssh-page.avif)

以下画像の画面に遷移後Titleに自分がわかりやすい名前を記入し、keyには`id_rsa.pub`の内容をすべてコピペします。
「key type」は「Authentication Key」のままで大丈夫です。

![add ssh key](/static/add-ssh-key.avif)


4. SSH接続の確認

```bash
ssh -T git@github.com
```

以下のように表示されれば成功です。

```bash
Hi ユーザー名 You've successfully authenticated, but GitHub does not provide shell access.
```


5. GitHubパスワードを毎回要求されるのを解消

鍵の発行ですべてEnterを押した場合は以下のパスにあるはずです。

```bash
ssh-add /home/ユーザー名/.ssh/id_rsa
```

登録されているのを確認

```bash
ssh-add -l
```

以下のような文字列が表示されれば成功です。

```bash
SHA:XXXXXXXXXXXXXXXXXXXXXXXXXXX
```
