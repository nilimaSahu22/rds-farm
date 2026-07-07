import type { OpenNextConfig } from "@opennextjs/cloudflare";

export default {
  default: {
    override: {
      wrapper: "cloudflare-node",
      converter: "edge",
      incrementalCache: "kv",
      tagCache: "kv",
      queue: "direct",
    },
  },
} satisfies OpenNextConfig;
