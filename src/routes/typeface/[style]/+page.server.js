
import data from "$lib/data/font_data.json" assert {type: 'json'};;

export async function load({ fetch, params }) {

  const fontData = data[params.style];
	return {
		style: params.style,
		fontData: fontData
	};
}