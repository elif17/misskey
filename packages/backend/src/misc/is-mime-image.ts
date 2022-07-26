// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import { FILE_TYPE_BROWSERSAFE } from '@/const.js';

const dictionary = {
	'safe-file': FILE_TYPE_BROWSERSAFE,
	'sharp-convertible-image': ['image/jpeg', 'image/png', 'image/gif', 'image/apng', 'image/vnd.mozilla.apng', 'image/webp', 'image/svg+xml'],
};

export const isMimeImage = (mime: string, type: keyof typeof dictionary): boolean => dictionary[type].includes(mime);
