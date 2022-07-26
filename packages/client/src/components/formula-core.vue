<!--
SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.

SPDX-License-Identifier: AGPL-3.0-only
-->

<!-- eslint-disable vue/no-v-html -->
<template>
<div v-if="block" v-html="compiledFormula"></div>
<span v-else v-html="compiledFormula"></span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import katex from 'katex';

export default defineComponent({
	props: {
		formula: {
			type: String,
			required: true
		},
		block: {
			type: Boolean,
			required: true
		}
	},
	computed: {
		compiledFormula(): any {
			return katex.renderToString(this.formula, {
				throwOnError: false
			} as any);
		}
	}
});
</script>

<style>
@import "../../node_modules/katex/dist/katex.min.css";
</style>
