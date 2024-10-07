const Publish = ({
	published,
	modified,
}: { published?: string; modified?: string }) => {
	return (
		<div class={"flex items-center gap-4"}>
			<div class={"flex items-center gap-1.5"}>
				<div
					class={
						"bg-secondary w-7 h-7 md:w-8 md:h-8 grid place-items-center rounded-[0.375rem]"
					}
				>
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class={"stroke-btn-foreground w-4 h-4 md:w-5 md:h-5"}
					>
						<title>Published Icon</title>
						<path d="M8 2v4" />
						<path d="M16 2v4" />
						<rect width="18" height="18" x="3" y="4" rx="2" />
						<path d="M3 10h18" />
					</svg>
				</div>
				<span
					class={
						"text-xs md:text-sm font-medium text-gray-400 dark:text-neutral-400"
					}
				>
					{published}
				</span>
			</div>
			{modified && (
				<div class={"flex items-center gap-1.5"}>
					<div
						class={
							"bg-secondary w-7 h-7 md:w-8 md:h-8 grid place-items-center rounded-[0.375rem]"
						}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class={"stroke-btn-foreground w-4 h-4 md:w-5 md:h-5"}
						>
							<title>Modified Icon</title>
							<path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
							<path d="M3 3v5h5" />
							<path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
							<path d="M16 16h5v5" />
						</svg>
					</div>
					<span
						class={
							"text-xs md:text-sm font-medium text-gray-400 dark:text-neutral-400"
						}
					>
						{modified}
					</span>
				</div>
			)}
		</div>
	);
};

export default Publish;
