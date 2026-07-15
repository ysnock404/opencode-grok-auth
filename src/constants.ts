export const PROVIDER_ID = "xai-oauth";
export const PROVIDER_NAME = "xAI Grok OAuth";

export const XAI_API_BASE_URL = "https://api.x.ai/v1";
export const XAI_OAUTH_ISSUER = "https://auth.x.ai";
export const XAI_OAUTH_AUTHORIZE_URL = `${XAI_OAUTH_ISSUER}/oauth2/authorize`;
export const XAI_OAUTH_DISCOVERY_URL = `${XAI_OAUTH_ISSUER}/.well-known/openid-configuration`;

// Public desktop OAuth client ID used by the Grok CLI flow. This is not a secret.
export const XAI_OAUTH_CLIENT_ID = "b1a00492-073a-47ea-816f-4c329264a828";
export const XAI_OAUTH_SCOPE = "openid profile email offline_access grok-cli:access api:access";

export const XAI_OAUTH_REDIRECT_HOST = "127.0.0.1";
export const XAI_OAUTH_REDIRECT_PORT = 56121;
export const XAI_OAUTH_REDIRECT_PATH = "/callback";

export const XAI_ACCESS_TOKEN_REFRESH_SKEW_MS = 120_000;
export const OAUTH_CALLBACK_TIMEOUT_MS = 180_000;

export const DEFAULT_XAI_MODELS = [
  "grok-4.5",
  "grok-composer-2.5-fast",
  "grok-4.3",
  "grok-4.20-0309-reasoning",
  "grok-4.20-0309-non-reasoning",
  "grok-4.20-multi-agent-0309",
] as const;
