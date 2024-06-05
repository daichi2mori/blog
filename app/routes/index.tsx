import Counter from "app/islands/Counter";
import { createRoute } from "honox/factory";

export default createRoute((c) => {
	const name = "d2m";
	return c.render(
		<div>
			<h1 class="text-2xl text-red-500">Welcome my blog!</h1>
			<Counter />
		</div>,
		{ title: name },
	);
});
