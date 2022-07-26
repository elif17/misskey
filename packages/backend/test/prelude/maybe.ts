// SPDX-FileCopyrightText: 2022, Shinoda Eiji <syuilotan@yahoo.co.jp>
// SPDX-License-Identifier: AGPL-3.0-only



import * as assert from 'assert';
import { just, nothing } from '../../src/prelude/maybe.js';

describe('just', () => {
	it('has a value', () => {
		assert.deepStrictEqual(just(3).isJust(), true);
	});

	it('has the inverse called get', () => {
		assert.deepStrictEqual(just(3).get(), 3);
	});
});

describe('nothing', () => {
	it('has no value', () => {
		assert.deepStrictEqual(nothing().isJust(), false);
	});
});
