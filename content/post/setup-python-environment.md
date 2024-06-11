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

### Windows

> Install [scoop](https://scoop.sh/)

Make sure you run this in powershell

```sh
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
```

```sh
scoop search python
scoop install python
```

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

## References

- [Python Basic Cheatsheet 2024](https://replit.com/@pybase/Python-Cheatsheet#main.py)

### Day 01

```python
# prints a string into the console
print("Python Cheatsheet 2024 from pybase.net")
# prints a string to console, and ask the user for a string input
# yourName = input("What is your name ? ")
yourName = "Pybase.net"
print(f"Hello {yourName}! Welcome to pybase cheatsheet!")
# upper first charecter of a string
yourNameInCapitalize = yourName.capitalize()
print(f"Hello {yourNameInCapitalize}! Welcome to pybase cheatsheet!")
# print the 3rd character of your name
thirdCharacters = yourName[2]
print(f"The third character of your name is {thirdCharacters}")
# replace your first character with P
replacedFirstCharacter = yourName.replace(yourName[0], "P")
print("Your name with replaced first character is " + replacedFirstCharacter)
# swap value
a = 5
b = 99
print(f"Before Swap: a = {a}, b = {b}")
# after swap
c = a
a = b
b = c
print(f"After Swap: a = {a}, b = {b}")

# datatypes
# python can infer the datatype of a variable such as
aString = "Hello"
aIntegerNumber = 1
aFloatingNumber = 1.1
aBoolean = True
# let's check type
print(type(aString))
print("Type of aString is " + str(type(aString)))
print("Type of aIntegerNumber is " + str(type(aIntegerNumber)))
print("Type of aFloatingNumber is " + str(type(aFloatingNumber)))
print("Type of aBoolean is " + str(type(aBoolean)))
print("Type of aBoolean is " + str(type(None)))
# let's convert the datatype
print((bool)(aString))
print((bool)(""))
print((bool)(None))
print((bool)(0))
print((bool)(aIntegerNumber))
print((bool)(aFloatingNumber))
aLongFloat = "0." + "0" * 100_000_000 + "1"
print(len(aLongFloat))
print(bool((float)(aFloatingNumber)))
print(int(1.99999))
print(int(2 / 3))
print(len(str(0.6666666666666666)) - 2)
print(2 / 3 == 0.6666666666666666)  # 18 digits
print(2 / 3 == 0.666666666666666)  # 17 digits
print(float(1))  # 1.0
print(float(2 / 3))
# math
print(2 + 3)  # 5
print(2 - 3)  # -1
print(2 * 3)  # 6
print(2**3)  # 8
print(2 / 3)  # 0.6666666666666666
print(2 % 3)  # 2
print(2 // 3)  # 0
```
