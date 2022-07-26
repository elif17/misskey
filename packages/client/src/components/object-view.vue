<!--
SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.

SPDX-License-Identifier: AGPL-3.0-only
-->

<template>
<div class="zhyxdalp">
	<XValue :value="value" :collapsed="false"/>
</div>
</template>

<script lang="ts" setup>
import { } from 'vue';
import XValue from './object-view.value.vue';

const props = defineProps<{
	value: Record<string, unknown>;
}>();
</script>

<style lang="scss" scoped>
.zhyxdalp {

}
</style>
