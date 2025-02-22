const config = {
  // Frontend config
  MAX_ATTACHMENT_SIZE: 1000000,
  STRIPE_KEY: "pk_test_51QqMeoBoSuI4op3y6MM5EwcYuTG1cjyJ1t59pzb3ReODmE34Pu9SwIxd9TfQlHKM0S2RC5B1umBh9Us7Y55KL0sf00w8V8AvyX",

  // Backend config
  s3: {
    REGION: import.meta.env.VITE_REGION,
    BUCKET: import.meta.env.VITE_BUCKET,
  },
  apiGateway: {
    REGION: import.meta.env.VITE_REGION,
    URL: import.meta.env.VITE_API_URL,
  },
  cognito: {
    REGION: import.meta.env.VITE_REGION,
    USER_POOL_ID: import.meta.env.VITE_USER_POOL_ID,
    APP_CLIENT_ID: import.meta.env.VITE_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: import.meta.env.VITE_IDENTITY_POOL_ID,
  },
};

export default config;
