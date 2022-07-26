// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import config from '@/config/index.js';

export default (tag: string) => ({
	type: 'Hashtag',
	href: `${config.url}/tags/${encodeURIComponent(tag)}`,
	name: `#${tag}`,
});
