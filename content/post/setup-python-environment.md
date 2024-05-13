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

## Main concepts

The execution of a Python script generally involves two major phases: parse time and runtime. Understanding these two phases helps in grasping how Python code is executed and how errors are detected and handled in different stages. Here’s a more detailed look at each phase:

### Parse Time

1. Parsing

- This is the phase where Python, or more specifically the Python interpreter, reads the code.
- The code is parsed by the parser, which transforms it into a more abstract syntax tree (AST). The AST represents the syntactic structure of the code, essentially turning the source code into a tree structure where each node represents a part of the code (like expressions, statements, etc.).
- During this phase, Python checks for syntax errors. A syntax error occurs if the code does not conform to the Python language rules. Common examples include missing colons after if, elif, else, for, while statements, incorrect indentation, or mismatched parentheses, brackets, or braces.

```python
if x == 1  # Missing colon
    print("x is 1")
```

2. Syntax Errors

- If there is a syntax error, Python will raise a SyntaxError exception and typically terminate the execution (the script will not proceed to the runtime phase).
- The error message will point to the line and often the exact position where the parser found the syntax inconsistent with Python's grammar.

### Run time

1. Execution

- If the parse phase is successful (no syntax errors), the Python code proceeds to the runtime phase.
- During runtime, the Python interpreter executes the code, line by line (or more precisely, statement by statement).
- This is when the code actually performs its tasks, like variable assignments, function calls, loops, etc.

2. Runtime errors

- Any errors that occur during this phase are called exceptions or runtime errors.
- Unlike syntax errors, exceptions can occur due to a wide range of issues like logical errors in the code, incorrect use of functions, operations that Python cannot perform (like division by zero), accessing non-existent files, etc.

```python
print(1 / 0)  # ZeroDivisionError: division by zero

my_list = [1, 2, 3]
print(my_list[3])  # IndexError: list index out of range

import some_non_existent_module  # ImportError: No module named 'some_non_existent_module'
```

3. Handling exceptions

- Python provides try, except, else, and finally blocks to handle exceptions. This allows the programmer to anticipate and plan for potential errors, providing alternative solutions or cleanup procedures.
- Unhandled exceptions will terminate the program, but those caught by except blocks can be dealt with, allowing the program to continue or exit gracefully.
