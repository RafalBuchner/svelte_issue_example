<script>
	import { base } from '$app/paths';
	export const prerender = true;
</script>
<nav>
	<ul>
		<li>
			<a href="{base}/">home</a>
			<a href="{base}/typeface/upright">upright</a>
			<a href="{base}/typeface/slanted">slanted</a>
		</li>
	</ul>
</nav>


<div class="main_container">
<slot/>
</div>

<style>
	* {
		font-family: sans-serif;
	}
	nav {
		border-bottom: 1px solid;
	}

	ul {
		list-style-type: none;
	}
	.main_container {
		width: 40%;
	}
</style>