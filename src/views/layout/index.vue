<template>
  <div class="menu"> <a-menu id="dddddd" v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys"
      style="width: 256px" mode="inline" :items="items" @click="handleClick"></a-menu></div>
  <div class="view-content"></div>
</template>
<script lang="ts" setup>
import { reactive, ref, watch, VueElement, h } from 'vue';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import type { MenuProps, ItemType } from 'ant-design-vue';

const selectedKeys = ref<string[]>(['1']);
const openKeys = ref<string[]>(['sub1']);

function getItem(
  label: VueElement | string,
  key: string,
  icon?: any,
  children?: ItemType[],
  type?: 'group',
): ItemType {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as ItemType;
}
const items: ItemType[] = reactive([
  getItem('Navigation Two', 'sub1', () => h(AppstoreOutlined), [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),

  ])
]);

const handleClick: MenuProps['onClick'] = e => {
  console.log('click', e);
};
watch(openKeys, val => {
  console.log('openKeys', val);
});




</script>
