<template>
  <div class="app-content">
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
let string: string = 'string'
string = '1'
// console.log("🚀 ~ string:", string)
let arr: number[] = [1, 3]
// console.log("🚀 ~ arr:", arr)
let arr1: Array<string> = ['一', '二']
// console.log("🚀 ~ arr1:", arr1)
let arr2: (number | string)[] = ['一', 2]
// console.log("🚀 ~ arr2:", arr2)
const fc = (a: number, b: number): number => { return a + b }
// items接受多个参数作为数组的项  
function push(array: any[], ...items: number[]) {
  items.forEach(function (item) {
    array.push(item);
  });
}
let a: any[] = [];
push(a, 1, 2, 3);
// 函数重载  函数多定义 类型多组
type Combinable = string | number
// function add(x: string, y: string): string
function add(x: Combinable, y: Combinable, z?: string) {
  if (typeof x === 'string' || typeof y === 'string') {
    return x.toString() + y.toString();
  }
  return x + y;
}
// console.log(add('sem', 'wan').split(' '));
// 元组
let x: [string, number] = ['hello', 10];
// 类型必须匹配且个数必须为2

// x = ['hello', 10]; // OK 
// x = ['hello', 10, 10]; // Error 
// x = [10, 'hello']; // Error

// let [arrS, arrN] = x
// // console.log("🚀 ~ arrS:", arrS)
// // console.log("🚀 ~ arrN:", arrN)
// 元组可选
let three: [number, number?, number?] = [1, 2, 3]
three = [1]
three = [1, 2]
three = [1, 2, 3]
const example = 1
</script>

<style scoped lang="scss">
.app-content {
  width: 100%;
  height: 100vh;
  // background-color: red;
}
</style>