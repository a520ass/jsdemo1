/**
 * Created by 520 on 2016/12/14.
 * 变量提升
 */
console.log(a);
var a=1;
/**
 *上面代码首先使用console.log方法，在控制台（console）显示变量a的值。这时变量a还没有声明和赋值，所以这是一种错误的做法，
 * 但是实际上不会报错。因为存在变量提升，真正运行的是下面的代码
 * var a;
 console.log(a);
 a = 1;
 最后的结果是显示undefined，表示变量a已声明，但还未赋值
 请注意，变量提升只对var命令声明的变量有效，如果一个变量不是用var命令声明的，就不会发生变量提升。
 */
console.log(b);
b = 1;