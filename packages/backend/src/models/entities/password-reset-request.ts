// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import { PrimaryColumn, Entity, Index, Column, ManyToOne, JoinColumn } from 'typeorm';
import { id } from '../id.js';
import { User } from './user.js';

@Entity()
export class PasswordResetRequest {
	@PrimaryColumn(id())
	public id: string;

	@Column('timestamp with time zone')
	public createdAt: Date;

	@Index({ unique: true })
	@Column('varchar', {
		length: 256,
	})
	public token: string;

	@Index()
	@Column({
		...id(),
	})
	public userId: User['id'];

	@ManyToOne(type => User, {
		onDelete: 'CASCADE',
	})
	@JoinColumn()
	public user: User | null;
}
