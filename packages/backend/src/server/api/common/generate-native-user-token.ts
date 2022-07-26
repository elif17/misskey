// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import { secureRndstr } from '@/misc/secure-rndstr.js';

export default () => secureRndstr(16, true);
