import { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import config from 'data/config';
import SEO from 'data/next-seo.config';
import { useHasMounted } from 'hooks/useHasMounted';
import 'components/ui/fonts.css';
import 'components/ui/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import '../css/prism.css';

const MyApp = ({ Component, pageProps, err }: AppProps & { err: any }) => {
  const router = useRouter();
  const hasMounted = useHasMounted();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if ((window as any)?.gtag?.pageview) {
        (window as any).gtag.pageview(url);
      }
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  if (!hasMounted) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${config.googleAnalyticsID}`}
      />
      <Script
        id="gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', '${config.googleAnalyticsID}', {
							page_path: window.location.pathname,
						});
					`,
        }}
      />
      <ThemeProvider attribute="class">
        <DefaultSeo
          {...SEO}
          additionalMetaTags={[
            {
              property: 'twitter:image',
              content: `${
                process.env.NODE_ENV !== 'development' ? config.NEXT_PUBLIC_PORTFOLIO_URL : ''
              }/thumbnail.png`,
            },
            {
              property: 'og:type',
              content: 'website',
            },
          ]}
        />
        <Component {...pageProps} err={err} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
