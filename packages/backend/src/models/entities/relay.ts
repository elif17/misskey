// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import { PrimaryColumn, Entity, Index, Column } from 'typeorm';
import { id } from '../id.js';

@Entity()
export class Relay {
	@PrimaryColumn(id())
	public id: string;

	@Index({ unique: true })
	@Column('varchar', {
		length: 512, nullable: false,
	})
	public inbox: string;

	@Column('enum', {
		enum: ['requesting', 'accepted', 'rejected'],
	})
	public status: 'requesting' | 'accepted' | 'rejected';
}
