// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import { PrimaryColumn, Entity, Index, JoinColumn, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { id } from '../id.js';
import { Note } from './note.js';
import { User } from './user.js';

@Entity()
@Index(['userId', 'ip'], { unique: true })
export class UserIp {
	@PrimaryGeneratedColumn()
	public id: string;

	@Column('timestamp with time zone', {
	})
	public createdAt: Date;

	@Index()
	@Column(id())
	public userId: User['id'];

	@Column('varchar', {
		length: 128,
	})
	public ip: string;
}
