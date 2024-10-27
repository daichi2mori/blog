import { allTags, type Tags } from "../types/index";
import { Fragment } from "hono/jsx/jsx-runtime";

const Publish = ({
  published_at,
  modified,
  tags,
}: {
  published_at?: string;
  modified?: string;
  tags?: Tags[];
}) => {
  return (
    <div class={"flex flex-wrap items-center gap-x-4 gap-y-1"}>
      <div class={"flex items-center gap-1.5"}>
        <div
          class={"bg-secondary w-7 h-7 md:w-8 md:h-8 grid place-items-center rounded-[0.375rem]"}
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
        <span class={"text-xs md:text-sm font-medium text-gray-400 dark:text-neutral-400"}>
          {published_at}
        </span>
      </div>
      {modified && (
        <div class={"flex items-center gap-1.5"}>
          <div
            class={"bg-secondary w-7 h-7 md:w-8 md:h-8 grid place-items-center rounded-[0.375rem]"}
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
          <span class={"text-xs md:text-sm font-medium text-gray-400 dark:text-neutral-400"}>
            {modified}
          </span>
        </div>
      )}
      <div class={"flex items-center gap-1.5"}>
        <div
          class={"bg-secondary w-7 h-7 md:w-8 md:h-8 grid place-items-center rounded-[0.375rem]"}
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
            <title>Tag Icon</title>
            <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
            <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
          </svg>
        </div>
        <div class={"text-xs md:text-sm font-medium text-gray-400 dark:text-neutral-400"}>
          {Array.isArray(tags) &&
            tags.length > 0 &&
            tags.map((tag, index) => {
              const item = allTags.find((t) => t.id === tag);
              if (item) {
                return (
                  <Fragment key={item.id}>
                    <a
                      href={`/blog/tag/${item.id}`}
                      class={
                        "p-1.5 rounded-sm duration-300 hover:text-primary hover:bg-btn dark:hover:bg-btn"
                      }
                    >
                      {item.label}
                    </a>
                    {index < tags.length - 1 && <span class={"mx-1"}>/</span>}
                  </Fragment>
                );
              }
              return null;
            })}
        </div>
      </div>
    </div>
  );
};

export default Publish;
