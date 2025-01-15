# Unintentional Zero Handling Bug in JavaScript

This repository demonstrates a subtle bug in a JavaScript function that unintentionally returns 0 when one or both parameters are 0.  The intended behavior is to handle only null values, but the current implementation incorrectly treats 0 as a null value. 

## Bug Description

The `foo` function aims to add two numbers. It correctly handles null input values by returning 0. However, it inadvertently returns 0 if either of the input numbers is 0, which is not the intended behavior. This bug can lead to unexpected results in calculations.

## Solution

The solution clarifies the condition to explicitly check for null values only. The `===` operator correctly handles strict equality, avoiding the issue.