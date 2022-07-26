// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import { markRaw } from 'vue';
import { locale } from '@/config';
import { I18n } from '@/scripts/i18n';

export const i18n = markRaw(new I18n(locale));

// このファイルに書きたくないけどここに書かないと何故かVeturが認識しない
declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$t: typeof i18n['t'];
		$ts: typeof i18n['locale'];
	}
}
