<!--
SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.

SPDX-License-Identifier: AGPL-3.0-only
-->

<template>
<XCode :code="code" :lang="lang" :inline="inline"/>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

defineProps<{
	code: string;
	lang?: string;
	inline?: boolean;
}>();

const XCode = defineAsyncComponent(() => import('./code-core.vue'));
</script>
