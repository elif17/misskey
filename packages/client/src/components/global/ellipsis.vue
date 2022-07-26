<!--
SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.

SPDX-License-Identifier: AGPL-3.0-only
-->

<template>
	<span class="mk-ellipsis">
		<span>.</span><span>.</span><span>.</span>
	</span>
</template>

<style lang="scss" scoped>
.mk-ellipsis {
	> span {
		animation: ellipsis 1.4s infinite ease-in-out both;

		&:nth-child(1) {
			animation-delay: 0s;
		}

		&:nth-child(2) {
			animation-delay: 0.16s;
		}

		&:nth-child(3) {
			animation-delay: 0.32s;
		}
	}
}

@keyframes ellipsis {
	0%, 80%, 100% {
		opacity: 1;
	}
	40% {
		opacity: 0;
	}
}
</style>
