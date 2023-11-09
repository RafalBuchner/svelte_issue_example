# Description of the issue


I've prepared this example to inform you about my SvelteKit issue.


I'm building the website, which will be a presentation of the fonts I've designed.


For this reason, I've built a simple Tester component (you can find its code in `src/lib/components/tester.svelte`) that is used in `src/routes/typeface/[style]/+page.svelte` file.


In `src/routes/typeface/[style]/+page.svelte` file, I'm dynamically building several instances of the Tester component based on the data parsed in `src/routes/typeface/[style]/+page.server.svelte` file. Data is loaded from the `src/lib/data/font-data.json` file.


# My question:

When I go to the "slanted" subpage directly from my home page, all parameters presented by sliders are correctly initiated.

When I switch to the "upright" subpage using the navigation link on the top of the page, **font weight** and **font slant** parameters are not being updated. This way, text that is supposed to be displayed in a heavy upright font is displayed with light-slanted letters. 

When I refresh the subpage using cmd+r (on Mac) or ctrl+r (on Windows), styling reinitiates and looks as it should. Now, when I click on the "slanted" link, the slanted subpage is messed up.

What should I do to have the correct styling without refreshing the page?



## Example of what I do want to achieve:

- <a href="https://blazetype.eu/typefaces/">This</a> catalogue of typefaces has similar functionality to what I'm looking for. If you click on some font's name, it will direct you to the subpage of the font with multiple testers (here called "font samplers" – you can see the sidenote on the left "font sampler").