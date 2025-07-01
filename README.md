# Audio Player

SvelteKit audio player for your music, with custom controls, playlist, filters, and search functionality.

[![npm version](https://badge.fury.io/js/@minsoochoo%2Faudio-player.svg)](https://www.npmjs.com/package/@minsoochoo/audio-player)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- 🎵 Audio playback with custom controls
- 📋 Playlist management
- 🔀 Shuffle and loop functionality
- 🎚️ Volume control
- ⏯️ Play/pause/previous/next controls
- 📱 Responsive design
- 🎨 TailwindCSS styling
- 📝 TypeScript support

## Installation

```bash
npm install @minsoochoo/audio-player
```

## ⚠️ Important: CSS Import Required

This package uses TailwindCSS for styling. You **must** import the compiled CSS file for the component to display correctly:

```javascript
// Import in your main app file
import '@minsoochoo/audio-player/styles.css';
```

## Quick Start

```svelte
<script>
	import { Player } from '@minsoochoo/audio-player';
	import '@minsoochoo/audio-player/styles.css'; // Required for styling

	const trackList = [
		{
			url: 'https://example.com/song1.mp3',
			title: 'Song Title 1'
		},
		{
			url: 'https://example.com/song2.mp3',
			title: 'Song Title 2'
		}
	];
</script>

<Player {trackList} />
```

## Documentation

For detailed usage instructions, troubleshooting, and advanced configuration, see [USAGE.md](./USAGE.md).

## Development

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build the library
bun run build

# Run tests
bun run test

# Run Storybook
bun run storybook
```

## API

### Track Interface

```typescript
interface Track {
	url: string; // Audio file URL
	title: string; // Track title to display
}
```

### Component Props

```typescript
interface PlayerProps {
	trackList: Track[]; // Array of tracks to play
}
```

## License

MIT © [Minsoo Choo](https://github.com/fel1x-developer)
