<!--
SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.

SPDX-License-Identifier: AGPL-3.0-only
-->

<template>
<XFormula :formula="formula" :block="block" />
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';
import * as os from '@/os';

export default defineComponent({
	components: {
		XFormula: defineAsyncComponent(() => import('./formula-core.vue'))
	},
	props: {
		formula: {
			type: String,
			required: true
		},
		block: {
			type: Boolean,
			required: true
		}
	}
});
</script>
