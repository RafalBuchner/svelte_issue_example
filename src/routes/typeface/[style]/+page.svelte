<script>
	import Tester from "$lib/components/tester.svelte";
	export let data;
</script>

<h1>Subpage: {data.style}</h1>

{#each data.fontData.testers as tester}
	<Tester 
		text="{tester.text}" 
		instances={data.fontData.instances} 
		current_style={tester.current_style} 
		font_size={tester.font_size}
	/>
{/each}