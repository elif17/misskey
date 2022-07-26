// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import { Entity, Index, JoinColumn, Column, ManyToOne, PrimaryColumn } from 'typeorm';
import { Note } from './note.js';
import { Clip } from './clip.js';
import { id } from '../id.js';

@Entity()
@Index(['noteId', 'clipId'], { unique: true })
export class ClipNote {
	@PrimaryColumn(id())
	public id: string;

	@Index()
	@Column({
		...id(),
		comment: 'The note ID.',
	})
	public noteId: Note['id'];

	@ManyToOne(type => Note, {
		onDelete: 'CASCADE',
	})
	@JoinColumn()
	public note: Note | null;

	@Index()
	@Column({
		...id(),
		comment: 'The clip ID.',
	})
	public clipId: Clip['id'];

	@ManyToOne(type => Clip, {
		onDelete: 'CASCADE',
	})
	@JoinColumn()
	public clip: Clip | null;
}
