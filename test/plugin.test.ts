import { describe, expect, it } from "vitest";
import { applyDefaultProviderConfig, isSafeXaiApiUrl } from "../src/plugin.js";

describe("plugin config", () => {
  it("injects a default xai-oauth provider", () => {
    const config: Record<string, unknown> = {};
    applyDefaultProviderConfig(config);

    const provider = (config.provider as Record<string, unknown>)["xai-oauth"] as Record<string, unknown>;
    expect(provider.npm).toBe("@ai-sdk/openai");
    expect((provider.options as Record<string, unknown>).baseURL).toBe("https://api.x.ai/v1");
    const modelIds = Object.keys(provider.models as Record<string, unknown>);
    expect(modelIds).toContain("grok-4.5");
    expect(modelIds).toContain("grok-composer-2.5-fast");
    expect(modelIds).toContain("grok-4.3");
  });

  it("only treats api.x.ai as a safe API token destination", () => {
    expect(isSafeXaiApiUrl(new URL("https://api.x.ai/v1/responses"))).toBe(true);
    expect(isSafeXaiApiUrl(new URL("https://auth.x.ai/oauth/token"))).toBe(false);
    expect(isSafeXaiApiUrl(new URL("https://example.com/v1/responses"))).toBe(false);
  });
});
