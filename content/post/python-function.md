---
title: "Python Function"
type: "post"
date: 2024-05-13T21:56:32+07:00
description: "In this tutorial you will learn all related things about function in python"
keywords: ["Setup Python Environment"]
categories: ["cheatsheet"]
tags: ["python"]
image: "/common/no-image.png"
---

In this tutorial, you will learn how to:

- Define a function
- Function with parameters
- Function with return values
- Basic Operators
- Write several functions: calculate bmi, calculate current week, calculate circle circumference

```python
import math
from datetime import date
PI = 3.14

# addition
# subtraction
# multiplication
# division
# exponent


def calculate_bmi(weight, height):
    bmi = weight / height ** 2
    return bmi


def add(a, b):
    return a + b


def minus(a, b):
    return a - b


def find_x(a):
    x = math.sqrt(a)
    return x, -1 * x


def calculate_circle_circumference(r: int):
    return 2 * r * PI


def what_is_current_week(today):
    # https://www.epochconverter.com/weeks/2023
    # All weeks are starting on Monday and ending on Sunday.
    # find first week start and end date
    # go to next week and find its end date
    # repeat until the current date is week's range
    # the return week is the value you need
    year = today.year
    first_date_of_year = date(year, 1, 1)
    print(f"{first_date_of_year} is the {first_date_of_year.isoweekday()} day in the week")
    isoweek_of_first_date = first_date_of_year.isoweekday()  # 1,2,3,4,5,6,7
    timedelta = today - first_date_of_year
    print(f"timedelta={timedelta.days}")
    days_to_count = (timedelta.days - (7 - isoweek_of_first_date))
    current_week = math.ceil(days_to_count / 7)
    # if first date is monday add one week to final result
    if isoweek_of_first_date == 1:
        current_week += 1
    print(f"Current week is {current_week}")


if __name__ == '__main__':
    print(add(1, 2))
    print(minus(b=5, a=4))
    print(calculate_circle_circumference(3.0))
    a = 4
    x1, x2 = find_x(a)
    print(x1, x2, a)
    weight = 67.8  # kg
    height = 1.66  # meters
    bmi = calculate_bmi(weight=weight, height=height)
    formatted_bmi = "{:.2f}".format(bmi)
    print(f"Your weight is {weight} and height is {height}. So your BMI value is {formatted_bmi}")
    what_is_current_week(date(2023, 1, 2))
    today = date.today()
    what_is_current_week(today)

```
