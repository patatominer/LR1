"use strict";
alert("Операция вычисления остатка от деления, введите два числа");
let first_number = Number(prompt("Введите первое число")), second_number = Number(prompt("Введите второе число"));
let result = first_number % second_number;
alert("Результат операции: " + first_number + " % " + second_number + " = " + result);