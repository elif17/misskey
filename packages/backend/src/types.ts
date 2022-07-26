// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

export const notificationTypes = ['follow', 'mention', 'reply', 'renote', 'quote', 'reaction', 'pollVote', 'pollEnded', 'receiveFollowRequest', 'followRequestAccepted', 'groupInvited', 'app'] as const;

export const noteVisibilities = ['public', 'home', 'followers', 'specified'] as const;

export const mutedNoteReasons = ['word', 'manual', 'spam', 'other'] as const;

export const ffVisibility = ['public', 'followers', 'private'] as const;
