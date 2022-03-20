import { Random } from "mockjs"
import { ArticleId, IArticle } from "../../type/article"
const markdown = `
# Function

## 函数实际上是一个对象

\`将函数名想象成一个指针\`

> 函数实际上是一个对象。每个函数都是\`Function\`类型的实例，而且都与其他引用类型一样具有属性和方法。由于函数是对象，因此函数名实际上也是一个指向函数对象的指针，不会与某个函数绑定。函数通常是使用函数语法定义的，如：
>
> \`\`\`javascript
> function sum(num1, num2) {
>     return num1 + num2;
> }
> \`\`\`
>
> 这与下面使用函数表达式定义函数的方法相差无几。
>
> \`\`\`javascript
> var sum = function (num1, num2) {
>     return num1 + num2;
> };
> \`\`\`
>
> 以上代码定义了变量\`sum\`并将其初始化为一个函数。有读者可能会注意到，\`function\`关键字后没有函数名。这是因为在使用函数表达式定义函数时，没有必要使用函数名——通过变量\`sum\`既可以引用函数。另外，还要注意函数末尾有一个分号(es6中这不是必须的)，就像声明其他变量时一样。
>
> 最后一种定义函数的方式是使用\`Function\`构造函数。\`Function\`构造函数可以接收任意数量的参数，但最后一个参数始终都被看成是函数体，而前面的参数则枚举出了新函数的参数。如：
>
> \`\`\`javascript
> const sum = new Function("num1", "num2", "return num1 + nunm2") // 不推荐
> \`\`\`
>
> 从技术角度讲，这是一个函数表达式。但是，我们不推荐读者使用这种方法定义函数，因为这种语法会导致解析两次代码（第一次是解析常规ECMAScript代码，第二次是解析传入构造函数中的字符串），从而影响性能。不过，这种语法对于理解“函数是对象，函数名是指针”的概念倒是非常直观的。
>
> 函数名仅仅是指向函数的指针，因此函数名与包含对象指针的其他变量并没有什么不同。换句话说，一个函数可以有多个名字。
>
> \`\`\`javascript
> function sum(num1, num2) {
>     return num1 + num2
> }
> console.log(sum(10, 10)) // 20
> const anotherSum = sum;
> console.log(anotherSum(10, 10)) // 20
> sum = null // 将sum置为null,让其与函数"断绝关系"
> console.log(anotherSum(10, 10)) // 20
> // anotherSum仍然有效！
> \`\`\`

## 没有重载

\`\`\`javascript
function addSomeNumber(num){
    return num + 100
}

function addSomeNumber(num) {
    return num + 200
}

var result = addSomeNumber(100) //300
\`\`\`

显然这个例子中声明了两个同名函数，而结果是后面的函数覆盖了前面的函数。以上代码实际上和下面的代码没有什么区别。

\`\`\`javascript
var addSomeNumber = function (num){
    return num + 100
}

addSomeNumber = function (num) {
    return num + 200
}

var result = addSomeNumber(100) //300
\`\`\`

## 函数声明与函数表达式

> 到目前为止，我们一直没有对函数声明和函数表达式加以区别。而实际上，浏览器的解析器在向执行环境中加载数据时（编译阶段），对函数声明和函数表达式并非一视同仁。在JavaScript引擎中，对于声明，是在编译阶段的任务，对于表达式，则是在执行阶段的任务。很明显，编译阶段要早于执行阶段。

\`\`\`javascript
alert(sum(10,10));
function sum(num1, num2){
    return num1 + num2;
}
\`\`\`

以上代码完全可以正常运行。因为在代码开始执行之前，解析器就已经通过一个名为函数声明提升（function declaration hoisting）的过程，读取并将函数声明添加到执行环境中。对代码求值时，JavaScript引擎在第一遍会声明函数并将它们放到源代码树的顶部。所以，即使声明函数的代码在调用它的代码后面，JavaScript引擎也能把函数声明提升到顶部。如果像下面例子所示的，把上面的函数声明改为等价的函数表达式，就会在执行期间导致错误。

\`\`\`javascript
alert(sum(10,10)); // ReferenceError (执行到该行时，环境中并没有sum函数)
var sum = function(num1, num2){
    return num1 + num2;
};
\`\`\`

以上代码之所以会在运行期间产生错误，原因在于函数位于一个初始化语句中，而不是一个函数声明。换句话说，在执行到函数所在的语句之前，变量\`sum\`中不会保存有对函数的引用；而且，由于第一行代码就会导致“unexpected identifier”（意外标识符）错误，实际上也不会执行到下一行。

除了什么时候可以通过变量访问函数这一点区别之外，函数声明与函数表达式的语法其实是等价的。

## 函数内部属性

### \`arguments\`

> \`arguments\`是一个类数组对象，包含传入函数中的所有参数。但这个对象还有一个名叫\`callee\`的属性，该属性是一个i指针，指向拥有这个\`arguments\`对象的函数。下面有一个非常经典的阶乘函数。

\`\`\`javascript
function factorial(num) {
    if (num <= 1) {
        return 1
    } else {
        return num * factorial(num - 1)
    }
}
\`\`\`

定义阶乘函数一般都要用到递归算法；在函数有名字，而且名字以后也不会变的情况下，这样定义没有问题。但问题是这个函数的执行与函数名\`factorial\`紧紧耦合在了一起。一旦有人将函数名\`factiorial\`改为其它名字，又没有更改函数内部的\`factorial\`时，就会出问题。为了消除这种紧密耦合的现象，可以像下面这样使用\`arguments.callee\`。

\`\`\`javascript
function factorial(num) {
    if (num <= 1) {
        return 1
    } else {
        return num * arguments.callee(num - 1)
    }
}
\`\`\`

在这个重写后的\`factorial()\`函数的函数体内，没有再引用函数名\`factorial\`。这样，无论引用函数时使用的是什么名字，都可以保证正常完成递归调用。例如：

\`\`\`javascript
var trueFactorial = factorial

factorial = function(){
    return 0
}

alert(trueFactorial(5))     //120
alert(factorial(5))         //0
\`\`\`

在此，变量\`trueFactorial\`获得了\`factorial\`的值，实际上是在另一个位置上保存了一个函数的指针。然后，我们又将一个简单地返回0的函数赋值给\`factorial\`变量。如果像原来的\`factorial()\`那样不使用\`arguments.callee\`，调用\`trueFactorial()\`就会返回0。可是，在解除了函数体内的代码与函数名的耦合状态之后，\`trueFactorial()\`仍然能够正常地计算阶乘；至于\`factorial()\`，它现在只是一个返回0的函数。

### \`this\`

> 函数内部的另一个特殊对象是\`this\`，其行为与Java和C#中的\`this\`大致类似。换句话说，\`this\`引用的是函数据以执行的环境对象——或者也可以说是\`this\`值（当在网页的全局作用域中调用函数时，\`this\`对象引用的就是\`window\`）。来看下面的例子。

\`\`\`javascript
window.color = "red"
var o = { color: "blue" }

function sayColor(){
    alert(this.color)
}

sayColor()     //"red"

o.sayColor = sayColor // 将全局函数sayColor赋给对象o的属性sayColor
o.sayColor()   //"blue"
\`\`\`

上面这个函数\`sayColor()\`是在全局作用域中定义的，它引用了\`this\`对象。由于在调用函数之前，\`this\`的值并不确定，因此\`this\`可能会在代码执行过程中引用不同的对象。当在全局作用域中调用\`sayColor()\`时，\`this\`引用的是全局对象\`window\`；换句话说，对\`this.color\`求值会转换成对\`window.color\`求值，于是结果就返回了\`"red"\`。而当把这个函数赋给对象\`o\`并调用\`o.sayColor()\`时，\`this\`引用的是对象o，因此对\`this.color\`求值会转换成对\`o.color\`求值，结果就返回了\`"blue"\`。

** 函数的名字仅仅是包含指针的变量而已。因此，即使是在不同的环境中执行，全局的\`sayColor()\`函数与\`o.sayColor()\`指向的仍然是同一个函数。**

### \`caller\`

> ECMAScript 5也规范化了另一个函数对象的属性：\`caller\`。除了Opera的早期版本不支持，其他浏览器都支持这个ECMAScript 3并没有定义的属性。这个属性中保存着调用当前函数的函数的引用，如果是在全局作用域中调用当前函数，它的值为\`null\`。例如：

\`\`\`javascript
function outer() {
    inner()
}

function inner() {
    console.log(inner.caller) // 输出outer函数
}

outer()
\`\`\`

以上代码会导致在控制台中输出\`outer()\`函数的源代码。因为\`outer()\`调用了\`inter()\`，所以\`inner,caller\`就是指向\`outer()\`。为了实现更松散的耦合，也可以通过\`arguments.callee.caller\`来访问相同的信息。

\`\`\`javascript
function outer() {
    inner()
}

function inner() {
    alert(arguments.callee.caller)
} 

outer()
\`\`\`

> IE、Firefox、Chrome和Safari的所有版本以及Opera 9.6都支持\`caller\`属性。

当函数在严格模式下运行时，访问\`arguments.callee\`会导致错误。ECMAScript 5还定义了\`arguments.caller\`属性，但在严格模式下访问它也会导致错误，而在非严格模式下这个属性始终是\`undefined\`。定义这个属性是为了分清\`arguments.caller\`和函数的\`caller\`属性。以上变化都是为了加强这门语言的安全性，这样第三方代码就不能在相同的环境里窥视其他代码了。

> 严格模式还有一个限制：不能为函数的\`caller\`属性赋值，否则会导致错误。

## 函数属性和方法

> 前面曾经提到过，ECMAScript中的函数是对象，因此函数也有属性和方法。每个函数都包括两个属性：\`length\`和\`prototype\`。



### \`length\`

其中，\`length\`表示函数希望接收的命名参数的个数，如下面的例子所示。

\`\`\`javascript
function sayName(name) {
    console.log(name)
}

function sum(a, b) {
    return a + b
}

function sayHi() {
    console.log("Hi")
}

console.log(sayName.length) // 1
console.log(sum.length) // 2
console.log(sayHi.length) // 0
\`\`\`

以上代码定义了3个函数，但每个函数接收的命名参数的个数不同。首先，\`sayName()\`函数定义了一个参数，因此其\`length\`属性的值为\`1\`。同理，\`sum()\`定义了两个参数，所以其\`length\`值为\`2\`，而\`sayHi()\`没有命名参数，所以其\`length\`值为\`0\`。



### \`prototype\`

> 在ECMAScript核心所定义的全部属性中，最耐人寻味的就是要数\`prototype\`属性了。对于ECMAScript中的引用类型而言，\`prototype\`都是保存它们所有实例方法的真正所在。换句话说，诸如\`toString()\`和\`valueOf()\`等方法实际上都保存在\`prototype\`名下，只不过是通过各自对象的实例访问罢了。在创建自定义引用类型以及实现继承时，\`prototype\`属性的作用时极其重要的。在ECMAScript 5中，\`prototype\`属性是不可枚举的，因此使用\`for-in\`无法发现。



### \`apply\`

> 每个函数都要包含两个 ** 非继承 ** 而来的方法：\`apply()\`和\`call()\`。这两个方法的用途都是在特定的作用域中调用函数，实际上等于设置函数体内的\`this\`对象的值。首先，\`apply()\`方法接收两个参数：一个是其中运行函数的作用域，另一个是参数数组。其中，第二个参数可以是\`Array\`实例，也可以是\`arguments\`对象。

例如：

\`\`\`javascript
function sum(a, b) {
    return a + b
}

function callSum1(a, b) {
    return sum.apply(this, arguments)
}

function callSum2(a, b) {
    return sum.apply(this, [a, b])
}

console.log(callSum1(1, 1)) // 2
console.log(callSum2(1, 1)) // 2
\`\`\`

在上面这个例子中，\`callSum1()\`在执行\`sum()\`函数时传入了\`this\`作为\`this\`值（因为是在全局作用域中调用的，所以传入的就是\`window\`对象）和\`arguments\`对象。而\`callSum2\`同样也调用了\`sum()\`函数，但它传入的则是\`this\`和一个参数数组。这两个函数都会正常执行并返回正确的结果。

> 在严格模式下，未指定环境对象而调用函数，则\`this\`值不会转型为\`window\`。除非明确把函数添加到某个对象或者调用\`apply()\`或\`call()\`，否则\`this\`值将是\`undefined\`。

### \`call\`

> \`call()\`方法与\`apply()\`方法的作用相同，它们的区别仅在于接收参数的方式不同。对于\`call()\`方法而言，第一个参数是\`this\`值没有变化，变化的是其余参数都直接传递给函数。换句话说，在使用\`call()\`方法时，传递给函数的参数必须逐个列举出来，如下面的例子所示。

\`\`\`javascript
function sum(num1, num2) {
    return num1 + num2
}

function callSum(num1, num2) {
    return sum.call(this, num1, num2)
}

alert(callSum(10,10))   //20
\`\`\`

> 在使用\`call()\`方法的情况下，\`callSum()\`必须明确地传入每一个参数。结果与使用\`apply()\`没有什么不同。至于是使用\`apply()\`还是\`call()\`，完全取决于你采取哪种给函数传递参数的方式最方便。如果你打算直接传入\`arguments\`对象，或者包含函数中先接收到的也是一个数组，那么使用\`apply()\`肯定更方便；否则，选择\`call()\`可能更合适。（在不给函数传递参数的情况下，使用哪个方法都无所谓。）

---

事实上，传递参数并非\`apply()\`和\`call()\`的真正用武之地；它们真正强大的地方是能够扩充函数赖以运行的作用域。

\`\`\`javascript
window.color = "red"
const o = { color: "blue" }

function sayColor(){
    console.log(this.color)
}

sayColor()                //red

sayColor.call(this)       //red
sayColor.call(window)     //red
sayColor.call(o)          //blue
\`\`\`

> 这个例子是在前面说明\`this\`对象的示例基础上修改而成的。这一次，\`sayColor()\`也是作为全局函数定义的，而且当在全局作用域中调用它时，它确实会显示\`"red"\`——因为对\`this.color\`的求值会转换成对\`window.color\`的求值。而\`sayColor.call(this)\`和\`sayColor.call(window)\`，则是两种显式地在全局作用域中调用函数的方式，结果当然都会显示\`"red"\`。但是，当运行\`sayColor.call(o)\`时，函数的执行环境就不一样了，因为此时函数体内的\`this\`对象指向了\`o\`，于是结果显示的是\`"blue"\`。

使用\`call()\`（或\`apply()\`）来扩充作用域的最大好处，就是对象不需要与方法有任何耦合关系。在前面例子的第一个版本中，我们是先将\`sayColor()\`函数放到了对象\`o\`中，然后再通过\`o\`来调用它的；而在这里重写的例子中，就不需要先前那个多余的步骤了。

### \`bind\`

> ECMAScript 5还定义了一个方法：\`bind()\`。这个方法会创建一个函数的实例，其\`this\`值会被绑定到传给\`bind()\`函数的值。

例如：

\`\`\`javascript
window.color = "red"
const o = { color: "blue" }

function sayColor() {
    console.log(this.color)
} 
const objectSayColor = sayColor.bind(o)
objectSayColor()    //blue
\`\`\`

在这里，\`sayColor()\`调用\`bind()\`并传入对象o，创建了\`objectSayColor()\`函数。\`objectSayColor()\`函数的\`this\`值等于\`o\`，因此即使是在全局作用域中调用这个函数，也会看到\`"blue"\`。

> 支持\`bind()\`方法的浏览器有IE9 +、Firefox 4 +、Safari 5.1 +、Opera 12 + 和Chrome。

> 每个函数继承的\`toLocaleString()\`和\`toString()\`方法始终都返回函数的代码。返回代码的格式则因浏览器而异——有的返回的代码与源代码中的函数代码一样，而有的则返回函数代码的内部表示，即由解析器删除了注释并对某些代码作了改动后的代码。由于存在这些差异，我们无法根据这两个方法返回的结果来实现任何重要功能；不过，这些信息在调试代码时倒是很有用。另外一个继承的\`valueOf()\`方法同样也只返回函数代码。
`
export const createArticle = (id: ArticleId): IArticle => {
    return {
        id: Random.id(),
        content: markdown,//Random.cparagraph(10),
        title: Random.title(),
        releaseTime: Random.date(),
        updateTime: Random.date(),
        pv: Random.integer(0, 10000)
    }
}