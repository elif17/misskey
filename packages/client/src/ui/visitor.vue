<!--
SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.

SPDX-License-Identifier: AGPL-3.0-only
-->

<template>
<DesignB/>
<XCommon/>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';
import DesignA from './visitor/a.vue';
import DesignB from './visitor/b.vue';
import XCommon from './_common_/common.vue';

export default defineComponent({
	components: {
		XCommon,
		DesignA,
		DesignB,
	},
});
</script>
