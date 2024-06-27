import { fetchOgp } from "app/lib/fetchOgp";

const LinkCard = async ({ url }: { url: string }) => {
	const ogpData = await fetchOgp(url);
	if (!ogpData) return <></>;

	return (
		<a
			href={url}
			target="_blank"
			rel="noreferrer"
			class={
				"w-full h-32 sm:h-36 md:h-40 flex justify-between border rounded-lg overflow-hidden transition-opacity hover:opacity-65"
			}
		>
			<div class={"px-3 py-3 md:px-6 md:py-4 flex flex-col justify-between"}>
				<span
					class={"text-lg sm:text-2xl font-bold text-ellipsis line-clamp-1"}
				>
					{ogpData.title}
				</span>
				<span
					class={
						"text-xs sm:text-base text-gray-500 text-ellipsis line-clamp-2"
					}
				>
					{ogpData.description}
				</span>
				<div class={"flex items-center gap-1 sm:gap-2"}>
					<img
						src={ogpData.favicon}
						alt="favicon"
						class={"w-3 h-3 sm:w-4 sm:h-4"}
					/>
					<span class={"text-xs sm:text-sm"}>{ogpData.host}</span>
				</div>
			</div>
			<img
				src={ogpData.image}
				alt="ogp"
				class={
					"h-full object-cover aspect-square xs:aspect-[23/12] rounded-r-lg"
				}
			/>
		</a>
	);
};

export default LinkCard;
