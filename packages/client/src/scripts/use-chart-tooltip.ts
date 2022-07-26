// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import { onUnmounted, ref } from 'vue';
import * as os from '@/os';
import MkChartTooltip from '@/components/chart-tooltip.vue';

export function useChartTooltip() {
	const tooltipShowing = ref(false);
	const tooltipX = ref(0);
	const tooltipY = ref(0);
	const tooltipTitle = ref(null);
	const tooltipSeries = ref(null);
	let disposeTooltipComponent;

	os.popup(MkChartTooltip, {
		showing: tooltipShowing,
		x: tooltipX,
		y: tooltipY,
		title: tooltipTitle,
		series: tooltipSeries,
	}, {}).then(({ dispose }) => {
		disposeTooltipComponent = dispose;
	});

	onUnmounted(() => {
		if (disposeTooltipComponent) disposeTooltipComponent();
	});

	function handler(context) {
		if (context.tooltip.opacity === 0) {
			tooltipShowing.value = false;
			return;
		}

		tooltipTitle.value = context.tooltip.title[0];
		tooltipSeries.value = context.tooltip.body.map((b, i) => ({
			backgroundColor: context.tooltip.labelColors[i].backgroundColor,
			borderColor: context.tooltip.labelColors[i].borderColor,
			text: b.lines[0],
		}));

		const rect = context.chart.canvas.getBoundingClientRect();

		tooltipShowing.value = true;
		tooltipX.value = rect.left + window.pageXOffset + context.tooltip.caretX;
		tooltipY.value = rect.top + window.pageYOffset + context.tooltip.caretY;
	}

	return {
		handler,
	};
}
