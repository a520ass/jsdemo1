function f1() {
    
}
f1.name//'f1'

var f2 = function () {};
f2.name // ''

var f3 = function myName() {};
f3.name // 'myName'

/*
 上面代码中，函数的name属性总是返回紧跟在function关键字之后的那个函数名。
 对于f2来说，返回空字符串，匿名函数的name属性总是为空字符串；
 对于f3来说，返回函数表达式的名字（真正的函数名还是f3，myName这个名字只在函数体内部可用）。
 */

// length属性
// length属性返回函数预期传入的参数个数，即函数定义之中的参数个数。

function f(a, b) {}
f.length // 2
// 上面代码定义了空函数f，它的length属性就是定义时的参数个数。不管调用时输入了多少个参数，length属性始终等于2。
//
// length属性提供了一种机制，判断定义时和调用时参数的差异，以便实现面向对象编程的”方法重载“（overload）。


// toString()
// 函数的toString方法返回函数的源码。

function f() {
    a();
    b();
    c();
}

f.toString()
// function f() {
//  a();
//  b();
//  c();
// }
// 函数内部的注释也可以返回。

function f() {/*
 这是一个
 多行注释
 */}

f.toString()
// "function f(){/*
//   这是一个
//   多行注释
// */}"
// 利用这一点，可以变相实现多行字符串。

var multiline = function (fn) {
    var arr = fn.toString().split('\n');
    return arr.slice(1, arr.length - 1).join('\n');
};

function f() {/*
 这是一个
 多行注释
 */}

multiline(f);
// " 这是一个
//   多行注释"