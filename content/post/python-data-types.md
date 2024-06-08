---
title: "Python Data Types"
type: "post"
date: 2024-06-08T10:51:41+07:00
description: "Python Data Types"
keywords: ["Python Data Types"]
categories: ["python-tutorial"]
tags: []
image: "/common/no-image.png"
---

There are 4 main data types in Python

- bool
- int
- float
- str

When you assign your variable to a primitive object such as: 1, "1", False, 1.1. Your variable will be reference to those object value.

Code example

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

Feel free to run code samples at [Python data type](https://replit.com/@pybase/Python-Cheatsheet#main.py)
