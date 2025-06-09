# 📘 My JavaScript Learning Journey

Welcome to my JavaScript learning journey! This file documents all the lessons I’ve completed so far. From basic outputs to functions, conditionals, and a mini project, I’ve gradually built my understanding of how JavaScript works.

---

## 🧪 Lesson 1: JavaScript Outputs

JavaScript brings interactivity to webpages. This was my first experiment displaying content dynamically:

```html
<script>
document.getElementById("heading1").innerHTML = "This is JavaScript!";
document.getElementById("paragraph1").innerHTML = "I'm having fun!";
</script>
```

---

## 📦 Lesson 2: Variables – Part 1

I learnt that variables are used to store information like text, which can then be displayed or changed.

```javascript
var text1 = "Hello everyone on the planet";
var text2 = "I love learning JS!";
var text3 = "JS is awesome!";
document.getElementById("heading1").innerHTML = text1;
document.getElementById("paragraph1").innerHTML = text2 + text3;
```

---

## ➗ Lesson 3: Variables – Part 2 (Numbers and Calculations)

I discovered that variables can also store numbers, and I can use them in calculations. This opens up lots of possibilities for working with maths and logic.

```javascript
var numA = 7;
var numB = 10;
document.getElementById("heading1").innerHTML = text1;
document.getElementById("paragraph2").innerHTML = numA + " x " + numB + " = " + (numA * numB);
```

---

## 🔐 Lesson 4: Conditionals

Conditionals let my code make decisions based on user input or values. Here's an example of checking whether a password is correct:

```javascript
var userInputPassword = "008";
var actualPassword = "007";
if (userInputPassword == actualPassword) {
    document.getElementById("output").innerHTML = "Correct password";
} else {
    document.getElementById("output").innerHTML = "Incorrect password. Try again";
}
```

---

## 🧰 Lesson 5: Functions

Functions allow me to group instructions together and reuse code more easily. This example changes the heading when clicked:

```html
<h1 onclick="this.innerHTML='is awesome'">JavaScript</h1>
```

---

## 🔁 Lesson 6: Functions Continued (with Conditionals)

Combining functions with conditionals makes my code more dynamic and interactive:

```javascript
function changeText() {
    if (document.getElementById("heading").innerHTML == "JavaScript") {
        document.getElementById("heading").innerHTML = "is awesome";
    } else {
        document.getElementById("heading").innerHTML = "JavaScript";
    }
}
```

---

## 🧮 Lesson 7: Function Parameters

Functions can accept parameters, which makes them more flexible. I used this example to practise adding numbers:

```javascript
function addNumbers(num1, num2) {
    document.getElementById("addition").innerHTML = num1 + num2;
}
addNumbers(10, 7);
```

---

## 🔄 Lesson 8: Function Return Values

Functions can return values so I can store or display the result elsewhere in my code:

```javascript
function addNumbers(num1, num2) {
    return num1 + num2;
}
document.getElementById("addition").innerHTML = addNumbers(10, 7);
```

---

## 🧭 Lesson 9: Variable Scope

I learnt that variable scope determines where a variable is accessible in my code — either globally (anywhere) or locally (within a function). Understanding scope helps me write cleaner and safer code.

---

## 🧪 Lesson 10–11: Mini Project – Login Form

I created a simple login form that checks both a username and password. This project helped me bring together conditionals and functions.


---

## 🧱 Lesson 12: SWITCH Statement

I explored the `switch` statement, which is useful when checking a variable against multiple possible values. It's cleaner than writing many `if...else` statements.

```javascript
var day = "Tuesday";

switch (day) {
    case "Monday":
        alert("Start of the work week!");
        break;
    case "Tuesday":
        alert("Still early in the week.");
        break;
    case "Friday":
        alert("Almost the weekend!");
        break;
    default:
        alert("Just another day.");
}
```

---

## ✅ Conclusion

Through these lessons, I’ve developed a solid foundation in JavaScript. I now understand how to use variables, conditionals, functions, parameters, and basic logic. I even built a mini login project! I’m excited to continue expanding my knowledge and building more advanced web applications.

Happy coding! 🚀
