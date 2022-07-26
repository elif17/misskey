// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import { db } from '@/db/postgre.js';
import { Relay } from '@/models/entities/relay.js';

export const RelayRepository = db.getRepository(Relay).extend({
});
