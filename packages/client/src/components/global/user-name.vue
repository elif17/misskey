<!--
SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.

SPDX-License-Identifier: AGPL-3.0-only
-->

<template>
<Mfm :text="user.name || user.username" :plain="true" :nowrap="nowrap" :custom-emojis="user.emojis"/>
</template>

<script lang="ts" setup>
import { } from 'vue';
import * as misskey from 'misskey-js';

const props = withDefaults(defineProps<{
	user: misskey.entities.User;
	nowrap?: boolean;
}>(), {
	nowrap: true,
});
</script>
