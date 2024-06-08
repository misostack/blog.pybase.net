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
