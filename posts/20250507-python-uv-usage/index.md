---
title: "Pythonのuvの基本的な使い方"
description: "毎回uvのコマンドを忘れてしまうので、メモとして残しておきます。"
published_at: "2025-05-07"
modified:
published: true
tags: ["python"]
---

- Python のインストール

```bash
uv python install 3.11.6
```

複数のバージョンを指定することもできます。

```bash
uv python install 3.11.6 3.10.17
```

- インストール済みのバージョンを確認する

```bash
uv python list
```

- インストールしたバージョンを使う

```bash
uv python use 3.11.6
```

- バージョンを固定する

```bash
uv python pin 3.11.6
```

- 仮想環境の作成

```bash
uv venv
```

上記の場合、`venv`という名前の仮想環境が作成されます。

名前を指定したい場合は、以下のようにします。

```bash
uv venv my_venv
```

また、仮想環境の作成時に、Python のバージョンを指定することもできます。

```bash
uv venv my_venv -p 3.11.6
```

- 仮想環境の有効化

```bash
.venv\Scripts\activate
```

- 仮想環境の無効化

```bash
deactivate
```

- プログラムの実行

```bash
uv run main.py
```
