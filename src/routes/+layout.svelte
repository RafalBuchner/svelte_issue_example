
<nav>
	<ul>
		<li>
			<a href="/">home</a>
			<a href="/typeface/upright">upright</a>
			<a href="/typeface/slanted">slanted</a>
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