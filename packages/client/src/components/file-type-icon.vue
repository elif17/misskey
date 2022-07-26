<!--
SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.

SPDX-License-Identifier: AGPL-3.0-only
-->

<template>
<span class="mk-file-type-icon">
	<template v-if="kind == 'image'"><i class="fas fa-file-image"></i></template>
</span>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
	type: string;
}>();

const kind = computed(() => props.type.split('/')[0]);
</script>
