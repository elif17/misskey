<!--
SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.

SPDX-License-Identifier: AGPL-3.0-only
-->

<template>
<div class="ipledcug">
	<div class="_fullinfo">
		<img src="https://xn--931a.moe/assets/not-found.jpg" class="_ghost"/>
		<div>{{ i18n.ts.notFoundDescription }}</div>
	</div>
</div>
</template>

<script lang="ts" setup>
import { i18n } from '@/i18n';
import { definePageMetadata } from '@/scripts/page-metadata';

const headerActions = $computed(() => []);

const headerTabs = $computed(() => []);

definePageMetadata({
	title: i18n.ts.notFound,
	icon: 'fas fa-exclamation-triangle',
});
</script>
