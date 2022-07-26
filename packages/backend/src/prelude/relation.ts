// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

export type Predicate<T> = (a: T) => boolean;

export type Relation<T, U> = (a: T, b: U) => boolean;

export type EndoRelation<T> = Relation<T, T>;
