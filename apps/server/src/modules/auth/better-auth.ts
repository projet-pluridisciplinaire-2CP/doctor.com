export const betterAuthConfigPlaceholder = {
  basePath: "/api/auth",
  // TODO(phase-2): wire the Better-Auth Drizzle adapter once auth flows are implemented.
  // Reference: https://www.better-auth.com/docs/adapters/drizzle
  provider: "better-auth-placeholder",
} as const;
