---
title: "100 Python Interview Questions"
type: "post"
date: 2024-06-08T21:14:36+07:00
description: "100 Python Interview Questions"
keywords: ["100 Python Interview Questions"]
categories: ["cheatsheet"]
tags: []
image: "/common/no-image.png"
---

## Question 1: Write a function to random an integer number in a specific range

Answer

```python
#!/usr/bin/env python
import math
import random


# https://en.wikipedia.org/wiki/Mersenne_Twister

def random_a_number_in_range(range):
    start = int(range[0])
    end = int(range[1])

    if end <= start:
        return
    # numberOfDigits = len(str(end))
    # random function will return a float number between 0 and 1
    # randomNumber = int(random.random() * math.pow(10, numberOfDigits))
    randomNumber = int(random.random() * end)

    if randomNumber < start:
        return start

    return randomNumber


if __name__ == "__main__":
    range1 = [1, 9]
    number1 = random_a_number_in_range(range1)
    testNumber1Value = "Valid" if number1 >= range1[0] and number1 <= range1[1] else "Invalid"
    print(f"Range: {range1} Number 1 is : {number1}, {testNumber1Value}")

```

## Question 02: Create a generate strong password function

```python
#!/usr/bin/env python
import random


def get_alphabet():
    alphabet = ""
    c = ord("a")
    while c <= ord("z"):
        alphabet += chr(c)
        c += 1

    return list(alphabet)


def get_symbols():
    return list("!@#$%^&*()_+:\"?><~+-=_")


def get_digits():
    digits = []
    i = 0
    while i <= 9:
        digits.append(i)
        i += 1
    return digits


def generate_symbol():
    symbols = get_symbols()
    return random.choice(symbols)


def generate_letter():
    letters = get_alphabet()
    return random.choice(letters)


def generate_digit():
    digits = get_digits()
    return random.choice(digits)


def generate_character(ctype):
    if ctype == "letter":
        letter = generate_letter()
        return letter if random.randint(0, 1) % 2 == 0 else str(letter).upper()
    elif ctype == "symbol":
        return generate_symbol()
    elif ctype == "digit":
        return str(generate_digit())
    return ""


def generate_strong_password(number_of_letters, number_of_symbols, number_of_digits):
    password = []
    for c in range(1, number_of_letters + 1):
        password.append(generate_character("letter"))
    for c in range(1, number_of_symbols + 1):
        password.append(generate_character("symbol"))
    for c in range(1, number_of_digits + 1):
        password.append(generate_character("digit"))
    random.shuffle(password)
    output = ""
    for c in password:
        output += c
    return output


if __name__ == "__main__":
    password = generate_strong_password(6, 2, 2)
    print(password)

```

## Question 3: Reeborg Challenge

- [Reeborg Challenge Hurdle 4](https://reeborg.ca/reeborg.html?lang=en&mode=python&menu=worlds%2Fmenus%2Freeborg_intro_en.json&name=Hurdle%204&url=worlds%2Ftutorial_en%2Fhurdle4.json)

![image](https://gist.github.com/assets/31009750/1b110c21-ff43-432e-bdf7-01ed5fec1856)

```python
def turn_right():
    turn_left()
    turn_left()
    turn_left()

def is_wall_on_right():
    turn_right()
    is_wall_in_front = wall_in_front()
    turn_left()
    return is_wall_in_front

def jump():
    turn_left()
    up = 0
    while is_wall_on_right():
        move()
        up += 1
    turn_right()
    move()
    turn_right()
    for m in range(0,up):
        move()
    turn_left()
def go():
    move()

while not at_goal():
    if not wall_in_front():
        go()
    if wall_in_front():
        jump()
```
