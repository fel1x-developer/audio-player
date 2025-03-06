/// <reference types="@vitest/browser/matchers" />
/// <reference types="@vitest/browser/providers/playwright" />
import { render } from 'vitest-browser-svelte'
import { expect, test } from 'vitest'

import Player from './Player.svelte'

test('Player', async () => {
	interface Track {
		url: string;
		title: string;
	}

	const trackExample: Track[] = [
		{
			url: 'https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3',
			title: 'Madza - Chords of Life'
		},
		{
			url: 'https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3',
			title: 'Madza - Late Night Drive'
		},
		{
			url: 'https://audioplayer.madza.dev/Madza-Persistence.mp3',
			title: 'Madza - Persistence'
		}
	];

	const screen = render(Player, { trackList: trackExample });
})