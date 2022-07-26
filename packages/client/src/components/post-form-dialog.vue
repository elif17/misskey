<!--
SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.

SPDX-License-Identifier: AGPL-3.0-only
-->

<template>
<MkModal ref="modal" :prefer-type="'dialog:top'" @click="$refs.modal.close()" @closed="$emit('closed')">
	<MkPostForm v-bind="$attrs" @posted="$refs.modal.close()" @cancel="$refs.modal.close()" @esc="$refs.modal.close()"/>
</MkModal>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MkModal from '@/components/ui/modal.vue';
import MkPostForm from '@/components/post-form.vue';

export default defineComponent({
	components: {
		MkModal,
		MkPostForm,
	},
	emits: ['closed'],
});
</script>
