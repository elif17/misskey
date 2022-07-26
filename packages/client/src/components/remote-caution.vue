<!--
SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.

SPDX-License-Identifier: AGPL-3.0-only
-->

<template>
<div class="jmgmzlwq _block"><i class="fas fa-exclamation-triangle" style="margin-right: 8px;"></i>{{ i18n.ts.remoteUserCaution }}<a class="link" :href="href" rel="nofollow noopener" target="_blank">{{ i18n.ts.showOnRemote }}</a></div>
</template>

<script lang="ts" setup>
import { i18n } from '@/i18n';

defineProps<{
	href: string;
}>();
</script>

<style lang="scss" scoped>
.jmgmzlwq {
	font-size: 0.8em;
	padding: 16px;
	background: var(--infoWarnBg);
	color: var(--infoWarnFg);

	> .link {
		margin-left: 4px;
		color: var(--accent);
	}
}
</style>
