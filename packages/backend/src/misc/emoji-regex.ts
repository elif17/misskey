// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import twemoji from 'twemoji-parser/dist/lib/regex.js';
const twemojiRegex = twemoji.default;

export const emojiRegex = new RegExp(`(${twemojiRegex.source})`);
