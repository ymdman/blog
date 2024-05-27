import type { Metadata } from 'next';
import { ApolloProviderWrapper } from './ApolloProviderWrapper';
import './globals.css';
import { css } from '../../styled-system/css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Container } from '../../styled-system/jsx';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <ApolloProviderWrapper>
          <Container
            height="100%"
            maxWidth={'2xl'}
            paddingX={{ base: 3.5, desktop: 0 }}
          >
            <Header />
            <main
              className={css({
                height: 'calc(100% - var(--footer-height))',
                paddingTop: 'var(--header-height)',
              })}
            >
              {children}
            </main>
            <Footer />
          </Container>
        </ApolloProviderWrapper>
      </body>
    </html>
  );
}
