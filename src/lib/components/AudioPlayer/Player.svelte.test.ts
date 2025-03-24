/// <reference types="@vitest/browser/matchers" />
/// <reference types="@vitest/browser/providers/playwright" />
// import { render } from 'vitest-browser-svelte';
import { describe, expect, test } from 'vitest';

// import Player, { format } from './Player.svelte';
import { format } from './Player.svelte';

describe('format', () => {
	test('seconds', () => {
		expect(format(45)).toEqual('00:45');
	});

	test('minute and seconds', () => {
		expect(format(100)).toEqual('01:40');
	});

	test('input is NaN', () => {
		expect(format(NaN)).toEqual('...');
	});
});

// test('Player', async () => {
// 	interface Track {
// 		url: string;
// 		title: string;
// 	}
//
// 	const trackExample: Track[] = [
// 		{
// 			url: 'https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3',
// 			title: 'Madza - Chords of Life'
// 		},
// 		{
// 			url: 'https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3',
// 			title: 'Madza - Late Night Drive'
// 		},
// 		{
// 			url: 'https://audioplayer.madza.dev/Madza-Persistence.mp3',
// 			title: 'Madza - Persistence'
// 		}
// 	];
// 	const screen = render(Player, { trackList: trackExample });
// });
