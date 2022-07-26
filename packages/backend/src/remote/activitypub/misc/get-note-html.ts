// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import * as mfm from 'mfm-js';
import { Note } from '@/models/entities/note.js';
import { toHtml } from '../../../mfm/to-html.js';

export default function(note: Note) {
	if (!note.text) return '';
	return toHtml(mfm.parse(note.text), JSON.parse(note.mentionedRemoteUsers));
}
