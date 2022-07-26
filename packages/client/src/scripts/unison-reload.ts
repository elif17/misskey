// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

// SafariがBroadcastChannel未実装なのでライブラリを使う
import { BroadcastChannel } from 'broadcast-channel';

export const reloadChannel = new BroadcastChannel<string | null>('reload');

// BroadcastChannelを用いて、クライアントが一斉にreloadするようにします。
export function unisonReload(path?: string) {
	if (path !== undefined) {
		reloadChannel.postMessage(path);
		location.href = path;
	} else {
		reloadChannel.postMessage(null);
		location.reload();
	}
}
