---
title: "Setup Python Environment"
type: "post"
date: 2024-03-04T22:41:27+07:00
description: "Setup Python Environment"
keywords: ["Setup Python Environment"]
categories: ["cheatsheet"]
tags: ["python"]
image: "/common/no-image.png"
---

## Install Python in your local

There is tool allow us to install/switch to multiple python versions at first glance.

### MACOS

```sh
brew install pyenv
pyenv versions
pyenv install --list | grep 11
brew install xz # fixed missing lib when install python using pyenv
pyenv install 3.11.4
pyenv global 3.11.4
```

- Add **"eval "$(pyenv init --path)"** to **"/.zprofile"**

```cnf
# Setting PATH for Python 3.11
# The original version is saved in .zprofile.pysave
# PATH="/Library/Frameworks/Python.framework/Versions/3.11/bin:${PATH}"

# Setting PATH for pyenv
eval "$(pyenv init --path)"
```

```sh
which python
which python3
which pip
```

#### Install pipenv

```sh
pip3 install --user pipenv
```

.zprofile

```cfg
# Setting pip packages
export PYTHONUSERBASE="$HOME/.local"
PATH="$PYTHONUSERBASE/bin:${PATH}"
```

```sh
source ~/.zprofile
which pipenv
```

#### Use pipenv

```sh
# activate
pipenv shell
# install dependencies
pipenv install
```

Package Management

### Install Poetry

- https://python-poetry.org/docs/#installing-with-the-official-installer

```sh
curl -sSL https://install.python-poetry.org | python3 -
poetry --version
```

### Adjust poetry venv path

```sh
poetry config virtualenvs.in-project true
poetry new python2024
cd python2024
poetry install
```

### Some poetry command

```sh
poetry env info
poetry env info --path
```
