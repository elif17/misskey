// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import Channel from '../channel.js';

export default class extends Channel {
	public readonly chName = 'drive';
	public static shouldShare = true;
	public static requireCredential = true;

	public async init(params: any) {
		// Subscribe drive stream
		this.subscriber.on(`driveStream:${this.user!.id}`, data => {
			this.send(data);
		});
	}
}
