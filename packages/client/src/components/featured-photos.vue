<!--
SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.

SPDX-License-Identifier: AGPL-3.0-only
-->

<template>
<div v-if="meta" class="xfbouadm" :style="{ backgroundImage: `url(${ meta.backgroundImageUrl })` }"></div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import * as Misskey from 'misskey-js';
import * as os from '@/os';

const meta = ref<Misskey.entities.DetailedInstanceMetadata>();

os.api('meta', { detail: true }).then(gotMeta => {
	meta.value = gotMeta;
});
</script>

<style lang="scss" scoped>
.xfbouadm {
	background-position: center;
	background-size: cover;
}
</style>
