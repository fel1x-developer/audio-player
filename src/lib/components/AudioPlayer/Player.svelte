<script module lang="ts">
	export function format(time: number) {
		if (isNaN(time)) return '...';

		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);

		return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import Title from './components/Title.svelte';
	import Time from './components/Time.svelte';
	import Progress from './components/Progress.svelte';
	import Loop from './components/Loop.svelte';
	import Previous from './components/Previous.svelte';
	import Play from './components/Play.svelte';
	import Pause from './components/Pause.svelte';
	import Next from './components/Next.svelte';
	import Shuffle from './components/Shuffle.svelte';
	import Volume from './components/Volume.svelte';
	import PlaylistItem from './components/PlaylistItem.svelte';

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

	const { trackList = trackExample }: { trackList: Track[] } = $props();

	let curTrack = $state(0);
	let audio = $state(new Audio(trackList[0].url));
	let isPlaying = $state(false);
	let playlist = $state(trackList);
	let title = $derived(playlist[curTrack].title);
	let length = $state(0);
	let time = $state(0);
	let slider = $state(0);
	let buffer = $state(0);
	let drag = $state(0);
	let volume = $state(0.8);
	let shuffled = $state(false);
	let looped = $state(false);

	let firstTimePlaying = true;

	function setAudioData() {
		length = audio.duration;
		time = audio.currentTime;
	}

	function setAudioTime() {
		time = audio.currentTime;
		slider = Number(time ? ((time * 100) / audio.duration).toFixed(1) : 0);
	}

	function setAudioProgress() {
		if (audio.buffered.length > 0) {
			const bufferedPercentage = (audio.buffered.end(0) / audio.duration) * 100;
			buffer = Number(bufferedPercentage.toFixed(2));
		}
	}

	function setAudioVolume() {
		volume = audio.volume;
	}
	function setAudioEnd() {
		if (audio) {
			// if (shuffled) {
			// 	playlist = shufflePlaylist(playlist);
			// }
			if (looped) {
				play();
			} else if (!looped) {
				next();
			} else {
				isPlaying = false;
			}
		}
	}

	onMount(() => {
		audio.addEventListener('loadeddata', setAudioData);
		audio.addEventListener('timeupdate', setAudioTime);
		audio.addEventListener('progress', setAudioProgress);
		audio.addEventListener('volumechange', setAudioVolume);
		audio.addEventListener('ended', setAudioEnd);
		pause();

		return () => {
			audio.removeEventListener('loadeddata', setAudioData);
			audio.removeEventListener('timeupdate', setAudioTime);
			audio.removeEventListener('progress', setAudioProgress);
			audio.removeEventListener('volumechange', setAudioVolume);
			audio.removeEventListener('ended', setAudioEnd);
			audio.pause();
			audio.src = '';
		};
	});

	// curTrack
	$effect(() => {
		if (audio) {
			audio.src = trackList[curTrack].url;
			audio.load();

			audio.addEventListener('loadeddata', setAudioData);
			audio.addEventListener('timeupdate', setAudioTime);
			audio.addEventListener('progress', setAudioProgress);
			audio.addEventListener('volumechange', setAudioVolume);

			audio.oncanplay = () => {
				if (firstTimePlaying) {
					firstTimePlaying = false;
					return;
				}
				play();
			};

			const setAudioEnd = () => {
				if (audio) {
					// if (shuffled) {
					// 	playlist = shufflePlaylist(playlist);
					// }
					if (looped) {
						play();
					} else if (!looped) {
						next();
					} else {
						isPlaying = false;
					}
				}
			};
			audio.addEventListener('ended', setAudioEnd);

			return () => {
				audio.removeEventListener('ended', setAudioEnd);
			};
		}
	});

	// volume
	$effect(() => {
		if (audio) {
			audio.volume = volume;
		}
	});

	// drag
	$effect(() => {
		if (audio) {
			pause();
			const val = Math.round((drag * audio.duration) / 100);
			const bufferedRanges = audio.buffered;

			let isInBufferedRange = false;
			for (let i = 0; i < bufferedRanges.length; i++) {
				if (val >= bufferedRanges.start(i) && val <= bufferedRanges.end(i)) {
					isInBufferedRange = true;
					break;
				}
			}

			if (isInBufferedRange) {
				audio.currentTime = val;
			} else {
				const waitingHandler = () => {
					if (audio.readyState === 4) {
						audio.removeEventListener('waiting', waitingHandler);
						// console.log("waiting for data");
					}
				};
				audio.addEventListener('waiting', waitingHandler);
			}
		}
	});

	// looped
	$effect(() => {
		if (audio) {
			let setAudioEnd;

			if (looped) {
				setAudioEnd = () => {
					audio.currentTime = 0;
					play();
				};
			} else {
				setAudioEnd = () => {
					if (audio) {
						// if (shuffled) {
						// 	playlist = shufflePlaylist(playlist);
						// }
						if (looped) {
							play();
						} else if (!looped) {
							next();
						} else {
							isPlaying = false;
						}
					}
				};
			}

			audio.addEventListener('ended', setAudioEnd);

			return () => {
				audio.removeEventListener('ended', setAudioEnd);
			};
		}
	});

	//  Handle functions

	const loop = () => {
		looped = !looped;
	};

	const previous = () => {
		if (curTrack !== 0) {
			curTrack--;
		} else {
			curTrack = playlist.length - 1;
		}
	};

	const play = () => {
		isPlaying = true;
		audio.play();
	};

	const pause = () => {
		isPlaying = false;
		audio.pause();
	};

	const next = () => {
		if (curTrack !== playlist.length - 1) {
			curTrack++;
		} else {
			curTrack = 0;
		}
	};

	const shuffle = () => {
		shuffled = !shuffled;
	};

	// const shufflePlaylist = (arr) => {
	// 	if (arr.length === 1) return arr;
	// 	const rand = Math.floor(Math.random() * arr.length);
	// 	return [arr[rand], ...shufflePlaylist(arr.filter((_, i) => i !== rand))];
	// };
	//
	// const sortCompare = (a, b) =>
	// 	!sortTracks ? null : a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
</script>

<div>
	<div class="font-quicksand bg-player-background overflow-auto rounded-xl px-5 sm:px-10">
		<div class="mt-8 mb-5 grid grid-cols-1 gap-y-6 sm:grid-cols-[auto_200px]">
			<Title {title} />
			<Time time={`${!time ? '0:00' : format(time)}/${!length ? '0:00' : format(length)}`} />
		</div>
		<Progress bind:value={slider} progress={buffer} bind:drag onmouseup={play} ontouchend={play} />
		<div class="mb-8 grid grid-cols-1 md:grid-cols-[auto_30%]">
			<div class="grid grid-cols-[repeat(3,auto)] place-items-center md:grid-cols-[repeat(5,auto)]">
				<Loop {looped} onclick={loop} />
				<Previous onclick={previous} />
				{#if isPlaying}
					<Pause onclick={pause} />
				{:else}
					<Play onclick={play} />
				{/if}
				<Next onclick={next} />
				<Shuffle {shuffled} onclick={shuffle} />
			</div>
			<Volume bind:volume />
		</div>
	</div>
	<div
		class="no-scroll mx-auto my-5 flex max-h-100 min-h-32 flex-col overflow-x-hidden pr-2.5"
		style:scrollbar-width="none"
	>
		{#key curTrack}
			{#each playlist as el, index (index)}
				<PlaylistItem
					status={index === curTrack}
					title={el.title}
					onclick={() => {
						pause();
						curTrack = index;
						audio = new Audio(el.url);
						// play();
					}}
				/>
			{/each}
		{/key}
	</div>
</div>

<style lang="postcss">
	@import './styles.css';
	.no-scroll::-webkit-scrollbar {
		display: none;
	}
</style>
