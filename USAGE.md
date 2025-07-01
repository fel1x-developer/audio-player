# Audio Player Usage Guide

## Installation

```bash
npm install @minsoochoo/audio-player
```

## Important: CSS Import

This package uses TailwindCSS for styling. When importing this component in your project, you **must** also import the compiled CSS file to ensure proper styling.

### Method 1: Import CSS in your main app file

```javascript
// In your main app file (e.g., main.js, app.js, or _app.js)
import '@minsoochoo/audio-player/styles.css';
```

### Method 2: Import CSS in your component file

```svelte
<!-- In your Svelte component -->
<script>
	import { Player } from '@minsoochoo/audio-player';
	import '@minsoochoo/audio-player/styles.css';
</script>

<Player {trackList} />
```

### Method 3: Import in CSS file

```css
/* In your main CSS file */
@import '@minsoochoo/audio-player/styles.css';
```

## Basic Usage

```svelte
<script>
	import { Player } from '@minsoochoo/audio-player';
	import '@minsoochoo/audio-player/styles.css';

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

## Why is the CSS import required?

This package includes TailwindCSS utility classes that are compiled into a standalone CSS file. Without importing this CSS file, the component will appear unstyled because the necessary CSS classes won't be available in your application.

The package exports both:

- `./`: The Svelte components
- `./styles.css`: The compiled TailwindCSS styles

## Troubleshooting

If the component appears unstyled:

1. **Check that you've imported the CSS**: Make sure you have `import '@minsoochoo/audio-player/styles.css';` in your code
2. **Check CSS load order**: Import the audio player CSS after your own base styles but before any component-specific overrides
3. **Check for CSS conflicts**: If you're using TailwindCSS in your project, there might be conflicting styles

## TypeScript

The package includes full TypeScript support. The component expects:

```typescript
interface Track {
	url: string;
	title: string;
}

// Component props
interface PlayerProps {
	trackList: Track[];
}
```
