---
title: "Python Strings"
type: "post"
date: 2024-06-08T11:33:51+07:00
description: "Python Strings"
keywords: ["Python Strings"]
categories: ["python-tutorial"]
tags: []
image: "/common/no-image.png"
---

> A sequence and ordered of characters, a string will be started and end with single quote or double quote

## Create a string

```python
a_string = "A python's string"
another_string = 'Another "python" string'
# multiline string
email_content = """
This is
"""
```

## Access elements in a string

```python
alphabet = "abcdefg"
print(alphabet[0] == "a")  # a
print(alphabet[-1] == "g")  # g
print(alphabet[0:2] == "ab")  # ab
print(alphabet[1:] == "bcdefg")  # bcdefg
print(alphabet[0:-2] == "abcde")  # abcde
print(alphabet[::] == "abcdefg")  # abcdefg

another_alphabet = alphabet[:]
print(another_alphabet == "abcdefg")
```

## Format a string

### String interpolation

- Add a "f" as a prefix before a string, so that you can wrap your variable inside the curly braces - {yourVariable}

```python
name = "Python2024"
target = "beginners"
print(f"This is {name} course for {target}\n")
```

### String format

- Use the curly braces as a place holder of your variable inside a string.

```python
print("This is {} course for {}\n".format(name, target))
```

### % Operator

- An old way to format your string in python

```python
print("This is %s course for %s" % (name, target))
```

### We can also use expressions inside the curly braces

```python
x, y = 1, 2
print(f"{x} + {y} = {x+y}")
```

### Raw string

```python
print(r"C:\workplace\nestjs")
# Output: C:\workplace\nestjs
```

### Let's play with string

```python
alphabet = "abcdefghijklmnopqrstuvwxyz"
print(f"{alphabet[0]}:{len(alphabet)}")
print(f"{alphabet[-1]}")

# find
print(alphabet.find("M"))

# replace
alphabet = alphabet.replace("m", "M")
print(alphabet)

# slicing
print(alphabet[0:5])

# split
print("a,b,c,d,e,f".split(","))

# strip
print(len(" a ".strip()))
print(len("    a     ".strip()))

# upper
print(alphabet[1].upper())
```
