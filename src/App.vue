<template>
  <div class="app-content">
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
let string: string = 'string'
string = '1'
console.log("🚀 ~ string:", string)
let arr: number[] = [1, 3]
console.log("🚀 ~ arr:", arr)
let arr1: Array<string> = ['一', '二']
console.log("🚀 ~ arr1:", arr1)
let arr2: (number | string)[] = ['一', 2]
console.log("🚀 ~ arr2:", arr2)
const fc = (a: number, b: number): number => { return a + b }

</script>

<style scoped lang="scss">
.app-content {
  width: 100%;
  height: 100vh;
  // background-color: red;
}
</style>