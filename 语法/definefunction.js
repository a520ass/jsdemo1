/**
 * Created by 520 on 2016/12/14.
 * 函数定义
 */
//function命令声明的代码区块，就是一个函数。function命令后面是函数名，函数名后面是一对圆括号，里面是传入函数的参数。函数体放在大括号里面。
function print(s) {
    console.log(s);
}

//这种写法将一个匿名函数赋值给变量。这时，这个匿名函数又称函数表达式（Function Expression），因为赋值语句的等号右侧只能放表达式。
//采用函数表达式声明函数时，function命令后面不带有函数名。如果加上函数名，该函数名只在函数体内部有效，在函数体外部无效。
var print1= function (s) {
    console.log(s);
};

var print2= function x() {   //建议使用这种     print2和x的名称可以相同
    console.log(typeof x);
};

//x;
print2();

//上面代码在函数表达式中，加入了函数名x。这个x只在函数体内部可用，指代函数表达式本身，其他地方都不可用。
// 这种写法的用处有两个，一是可以在函数体内部调用自身，二是方便除错（除错工具显示函数调用栈时，将显示函数名，而不再显示这里是一个匿名函数）。因此，下面的形式声明函数也非常常见
//需要注意的是，函数的表达式需要在语句的结尾加上分号，表示语句结束。而函数的声明在结尾的大括号后面不用加分号。总的来说，这两种声明函数的方式，差别很细微（参阅后文《变量提升》一节），这里可以近似认为是等价的。
print1("111");

//Function构造函数。
var add1=new Function(
    'x',
    'y',
    'return x+y'
);
//等同于下面的
function add2(x,y) {
    return x+y;
}

//也可以不加new
var add3= Function(
    'x',
    'y',
    'return x+y'
);


/***
 * 函数的重复声明
 如果同一个函数被多次声明，后面的声明就会覆盖前面的声明。
 */


function f() {
    console.log(1);
}
f() // 2

function f() {
    console.log(2);
}
f() // 2
//上面代码中，后一次的函数声明覆盖了前面一次。而且，由于函数名的提升（参见下文），前一次声明在任何时候都是无效的，这一点要特别注意。


/**
 * JavaScript语言将函数看作一种值，与其它值（数值、字符串、布尔值等等）地位相同。凡是可以使用值的地方，就能使用函数。比如，可以把函数赋值给变量和对象的属性，也可以当作参数传入其他函数，或者作为函数的结果返回。函数只是一个可以执行的值，此外并无特殊之处。
 由于函数与其他数据类型地位平等，所以在JavaScript语言中又称函数为第一等公民
 *
 *
 *
 */
function add(x, y) {
    return x + y;
}

// 将函数赋值给一个变量
var operator = add;

// 将函数作为参数和返回值
function a(op){
    return op;
}
a(add)(1, 1)
// 2

/**
 * 函数名的变量提升提升
 JavaScript引擎将函数名视同变量名，所以采用function命令声明函数时，整个函数会像变量声明一样，被提升到代码头部。所以，下面的代码不会报错
 *
 *
 *
 */
//函数定义(function 命令定义)
f1();
function f1() {}
//表面上，上面代码好像在声明之前就调用了函数f。但是实际上，由于“变量提升”，函数f1被提升到了代码头部，也就是在调用之前已经声明了。但是，如果采用赋值语句定义函数，JavaScript就会报错

//function f1(){}   函数变量提升后
//f1();

//赋值语句定义
f2();
var f2 = function (){};
// TypeError: undefined is not a function
//上面的代码等同于下面的形式。

//var f2;
//f2();
//f2 = function () {};
//上面代码第二行，调用f2的时候，f2只是被声明了，还没有被赋值，等于undefined，所以会报错

//因此，如果同时采用function命令和赋值语句声明同一个函数，最后总是采用赋值语句的定义。
var f3 = function() {
    console.log('1');
}

function f3() {
    console.log('2');
}

f3() // 1

/*
    以上函数 变量提升后是这样
    var f3;

    function f3(){      这种写法的。当作一个变量。提升到代码前面
    console.log('2');
    }

    f3=function(){
    console.log('1');
    }

    f3();
 */