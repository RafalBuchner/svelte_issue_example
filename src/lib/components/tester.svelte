<script>
	export let text = "test text";
	export let instances;
	export let current_style;
	export let font_size = 100;
	let weight = 400;
	let slant = 0;
	weight = instances[current_style].wght
	slant = instances[current_style].slnt


	let css_variable = "";

	$: css_variable = `"wght" ${weight}, "slnt" ${slant}`

	function valueChangeHandler() {

		weight = instances[current_style].wght
	}
</script>

<div style="display: flex; column-gap: 20px; border: 0px; border-top: 1px; border-style: solid; margin-top: 1rem;" >
	<div>
	<h3>font size</h3>
	<input type="range" min="20" max="400" bind:value={font_size}/>
	</div>

	<div>
	<h3>font weight</h3>
	<input type="range" min="300" max="1000" bind:value={weight} on:valueChange={valueChangeHandler}/>
	</div>

	<div>
	<h3>font slant</h3>
	<input type="range" min="-15" max="0" bind:value={slant}/>
	</div>
</div>

<div style="font-size: {font_size}px; font-variation-settings: {css_variable};" contenteditable="true">
	{text}
</div>

<style>
	h3 {
		margin-bottom: 5px;
	}
	div {
		font-family: 'Recursive', sans-serif;
	}

</style>