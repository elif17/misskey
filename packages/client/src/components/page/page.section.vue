<!--
SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.

SPDX-License-Identifier: AGPL-3.0-only
-->

<template>
<section class="sdgxphyu">
	<component :is="'h' + h">{{ block.title }}</component>

	<div class="children">
		<XBlock v-for="child in block.children" :key="child.id" :block="child" :hpml="hpml" :h="h + 1"/>
	</div>
</section>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, PropType } from 'vue';
import * as os from '@/os';
import { SectionBlock } from '@/scripts/hpml/block';
import { Hpml } from '@/scripts/hpml/evaluator';

export default defineComponent({
	components: {
		XBlock: defineAsyncComponent(() => import('./page.block.vue'))
	},
	props: {
		block: {
			type: Object as PropType<SectionBlock>,
			required: true
		},
		hpml: {
			type: Object as PropType<Hpml>,
			required: true
		},
		h: {
			required: true
		}
	},
});
</script>

<style lang="scss" scoped>
.sdgxphyu {
	margin: 1.5em 0;

	> h2 {
		font-size: 1.35em;
		margin: 0 0 0.5em 0;
	}

	> h3 {
		font-size: 1em;
		margin: 0 0 0.5em 0;
	}

	> h4 {
		font-size: 1em;
		margin: 0 0 0.5em 0;
	}

	> .children {
		//padding 16px
	}
}
</style>
