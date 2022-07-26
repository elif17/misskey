// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import { PrimaryColumn, Entity, Index, JoinColumn, Column, OneToOne } from 'typeorm';
import { Note } from './note.js';
import { User } from './user.js';
import { id } from '../id.js';

@Entity()
export class PromoNote {
	@PrimaryColumn(id())
	public noteId: Note['id'];

	@OneToOne(type => Note, {
		onDelete: 'CASCADE',
	})
	@JoinColumn()
	public note: Note | null;

	@Column('timestamp with time zone')
	public expiresAt: Date;

	//#region Denormalized fields
	@Index()
	@Column({
		...id(),
		comment: '[Denormalized]',
	})
	public userId: User['id'];
	//#endregion
}
