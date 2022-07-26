// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import * as mfm from 'mfm-js';
import { unique } from '@/prelude/array.js';

export function extractHashtags(nodes: mfm.MfmNode[]): string[] {
	const hashtagNodes = mfm.extract(nodes, (node) => node.type === 'hashtag');
	const hashtags = unique(hashtagNodes.map(x => x.props.hashtag));

	return hashtags;
}
