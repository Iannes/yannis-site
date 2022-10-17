const config = {
  defaultTitle: 'Yannis Spyrou',
  url: process.env.NODE_ENV !== 'development' ? process.env.NEXT_PUBLIC_PORTFOLIO_URL : 'http://localhost:3000',
  defaultDescription: 'I’m Yannis and I’m a Frontend engineer!',
  googleAnalyticsID: '',
  NEXT_PUBLIC_PORTFOLIO_URL: process.env.NEXT_PUBLIC_PORTFOLIO_URL,
};

export default config;
