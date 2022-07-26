// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import { Packed } from './schema.js';

export function isInstanceMuted(note: Packed<'Note'>, mutedInstances: Set<string>): boolean {
	if (mutedInstances.has(note?.user?.host ?? '')) return true;
	if (mutedInstances.has(note?.reply?.user?.host ?? '')) return true;
	if (mutedInstances.has(note?.renote?.user?.host ?? '')) return true;

	return false;
}

export function isUserFromMutedInstance(notif: Packed<'Notification'>, mutedInstances: Set<string>): boolean {
	if (mutedInstances.has(notif?.user?.host ?? '')) return true;

	return false;
}
