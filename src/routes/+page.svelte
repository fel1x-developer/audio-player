<script lang="ts">
	import Player from '$lib/index.js';

	const tracks = [
		{
			url: 'https://static1.squarespace.com/static/56d099dcd210b84fb46007cc/t/56d3bf22cf80a1640661984a/1456717608391/CadillacClub.mp3/original/CadillacClub.mp3',
			title: 'Friday Night at the Cadillac Club'
		},
		{
			url: 'https://static1.squarespace.com/static/56d099dcd210b84fb46007cc/t/56d3c117d210b8b23f1fa7d0/1456718108777/Gossamer+Wings.mp3/original/Gossamer+Wings.mp3 ',
			title: 'Gossamer Wings'
		},
		{
			url: 'https://static1.squarespace.com/static/56d099dcd210b84fb46007cc/t/56d3c000746fb93b0ba95aaa/1456717831103/HIT+THE+GROUND+RUNNING.mp3/original/HIT+THE+GROUND+RUNNING.mp3',
			title: 'Hit The Ground Running'
		},
		{
			url: 'https://static1.squarespace.com/static/56d099dcd210b84fb46007cc/t/56d0e40037013b86b6ea0dfc/1456530443243/MacArthur+Park.mp3/original/MacArthur+Park.mp3',
			title: 'MacArthur Park'
		},
		{
			url: 'https://static1.squarespace.com/static/56d099dcd210b84fb46007cc/t/56d0e2a1f85082ea376bc78b/1456530092235/Un+Calor+Seco.mp3/original/Un+Calor+Seco.mp3',
			title: 'Un Calor Seco'
		},
		{
			url: 'https://static1.squarespace.com/static/56d099dcd210b84fb46007cc/t/56d3bfb959827e6585ca6d34/1456717758501/Body+and+Soul.mp3/original/Body+and+Soul.mp3',
			title: 'Body and Soul'
		},
		{
			url: 'https://static1.squarespace.com/static/56d099dcd210b84fb46007cc/t/56d3c17ce32140b8a0c54228/1456718214016/Recessions.mp3/original/Recessions.mp3',
			title: 'Recessions'
		},
		{
			url: 'https://static1.squarespace.com/static/56d099dcd210b84fb46007cc/t/56d3bfe07da24f7ba212019d/1456717797711/Long+In+The+Tooth.mp3/original/Long+In+The+Tooth.mp3',
			title: 'Long In The Tooth'
		},
		{
			url: 'https://static1.squarespace.com/static/56d099dcd210b84fb46007cc/t/56d3c14907eaa0756aee70e8/1456718165379/If+I+Could.mp3/original/If+I+Could.mp3',
			title: 'If I Could'
		},
		{
			url: 'https://static1.squarespace.com/static/56d099dcd210b84fb46007cc/t/56d3bf839f72661c5b3136b7/1456717705137/Begin+the+Beguine.mp3/original/Begin+the+Beguine.mp3',
			title: 'Begin the Beguine'
		}
	];
</script>

<div class="w-1/2 h-1/2 m-auto mt-20">
	<Player trackList={tracks} />
</div>