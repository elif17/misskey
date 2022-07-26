// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import * as mfm from 'mfm-js';
import { unique } from '@/prelude/array.js';

export function extractCustomEmojisFromMfm(nodes: mfm.MfmNode[]): string[] {
	const emojiNodes = mfm.extract(nodes, (node) => {
		return (node.type === 'emojiCode' && node.props.name.length <= 100);
	});

	return unique(emojiNodes.map(x => x.props.name));
}
