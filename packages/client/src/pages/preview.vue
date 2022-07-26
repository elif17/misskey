<!--
SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.

SPDX-License-Identifier: AGPL-3.0-only
-->

<template>
<div class="graojtoi">
	<MkSample/>
</div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import MkSample from '@/components/sample.vue';
import { i18n } from '@/i18n';
import { definePageMetadata } from '@/scripts/page-metadata';

const headerActions = $computed(() => []);

const headerTabs = $computed(() => []);

definePageMetadata(computed(() => ({
	title: i18n.ts.preview,
	icon: 'fas fa-eye',
})));
</script>

<style lang="scss" scoped>
.graojtoi {
	padding: var(--margin);
}
</style>
