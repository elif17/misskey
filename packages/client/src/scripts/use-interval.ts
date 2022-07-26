// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import { onMounted, onUnmounted } from 'vue';

export function useInterval(fn: () => void, interval: number, options: {
	immediate: boolean;
	afterMounted: boolean;
}): void {
	if (Number.isNaN(interval)) return;

	let intervalId: number | null = null;

	if (options.afterMounted) {
		onMounted(() => {
			if (options.immediate) fn();
			intervalId = window.setInterval(fn, interval);
		});
	} else {
		if (options.immediate) fn();
		intervalId = window.setInterval(fn, interval);
	}

	onUnmounted(() => {
		if (intervalId) window.clearInterval(intervalId);
	});
}
