<h1>Description of the issue</h1>
<p>I&#39;ve prepared this example to inform you about my SvelteKit issue.</p>
<p>I&#39;m building the website, which will be a presentation of the fonts I&#39;ve designed.</p>
<p>For this reason, I&#39;ve built a simple Tester component (you can find its code in <code>src/lib/components/tester.svelte</code>) that is used in <code>src/routes/typeface/[style]/+page.svelte</code> file.</p>
<p>In <code>src/routes/typeface/[style]/+page.svelte</code> file, I&#39;m dynamically building several instances of the Tester component based on the data parsed in <code>src/routes/typeface/[style]/+page.server.svelte</code> file. Data is loaded from the <code>src/lib/data/font-data.json</code> file.</p>
<h1>My question:</h1>
<p>When I go to the &quot;slanted&quot; subpage directly from my home page, all parameters presented by sliders are correctly initiated.</p>
<p>When I switch to the &quot;upright&quot; subpage using the navigation link on the top of the page, <strong>font weight</strong> and <strong>font slant</strong> parameters are not being updated. This way, text that is supposed to be displayed in a heavy upright font is displayed with light-slanted letters. </p>
<p>When I refresh the subpage using cmd+r (on Mac) or ctrl+r (on Windows), styling reinitiates and looks as it should. Now, when I click on the &quot;slanted&quot; link, the slanted subpage is messed up.</p>
<p>What should I do to have the correct styling without refreshing the page?</p>
<p>&nbsp;</p>
<h2>Example of what I do want to achieve:</h2>
<ul>
<li><a href="https://blazetype.eu/typefaces/">This</a> catalogue of typefaces has similar functionality to what I&#39;m looking for. If you click on some font&#39;s name, it will direct you to the subpage of the font with multiple testers (here called &quot;font samplers&quot; – you can see the sidenote on the left &quot;font sampler&quot;).</li>

</ul>



<style>
	code {
		background: #e4edec;
		padding: 0.1em;
		padding-left: 0.5em;
		padding-right: 0.5em;
		border-radius: 0.5em;
	}
</style>