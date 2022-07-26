// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import * as os from '@/os';
import { i18n } from '@/i18n';

export function showSuspendedDialog() {
	return os.alert({
		type: 'error',
		title: i18n.ts.yourAccountSuspendedTitle,
		text: i18n.ts.yourAccountSuspendedDescription
	});
}
