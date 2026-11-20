const createAuthorizationServerMetadata = (origin: string) => ({
  issuer: origin,
  authorization_endpoint: `${origin}/components/overview`,
  token_endpoint: `${origin}/components/overview`,
  jwks_uri: `${origin}/.well-known/jwks.json`,
  grant_types_supported: ['urn:ietf:params:oauth:grant-type:token-exchange'],
  response_types_supported: ['none'],
  scopes_supported: ['public:read'],
  agent_auth: {
    skill: `${origin}/components/overview`,
    register_uri: `${origin}/components/overview`,
    claim_uri: `${origin}/components/overview`,
    identity_types_supported: ['anonymous'],
    anonymous: {
      credential_types_supported: ['none'],
      claim_uri: `${origin}/components/overview`,
    },
  },
});

export const onRequestGet = ({ request }: { request: Request }) => {
  const { origin } = new URL(request.url);

  return Response.json(createAuthorizationServerMetadata(origin));
};
