<!--
SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.

SPDX-License-Identifier: AGPL-3.0-only
-->

<template>
<MkEmoji :emoji="reaction" :custom-emojis="customEmojis || []" :is-reaction="true" :normal="true" :no-style="noStyle"/>
</template>

<script lang="ts" setup>
import { } from 'vue';

const props = defineProps<{
	reaction: string;
	customEmojis?: any[]; // TODO
	noStyle?: boolean;
}>();
</script>
