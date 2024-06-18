import { css } from '../../../styled-system/css';
import { Stack } from '../../../styled-system/jsx';
import Link from 'next/link';

export function Header() {
  return (
    <div
      className={css({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: 'var(--header-height)',
      })}
    >
      <Stack
        as="header"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        height="inherit"
        marginLeft="auto"
        marginRight="auto"
        paddingRight={{ base: 3.5, desktop: 7 }}
        paddingLeft={{ base: 3.5, desktop: 7 }}
      >
        <p>
          <Link
            href="/"
            className={css(
              {
                fontWeight: 'bold',
                base: { fontSize: 'md' },
                desktop: { fontSize: 'xl' },
              },
              anchorStyle,
            )}
          >
            ymdman.com
          </Link>
        </p>
        <Stack as="ul" direction="row" gap={{ base: 5, desktop: 12 }}>
          <li>
            <Link href="/about" className={css(anchorStyle, navAnchorStyle)}>
              About
            </Link>
          </li>
          <li>
            <Link href="articles" className={css(anchorStyle, navAnchorStyle)}>
              Articles
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/ymdman"
              target="_blank"
              className={css(anchorStyle, navAnchorStyle)}
            >
              GitHub
            </a>
          </li>
        </Stack>
      </Stack>
    </div>
  );
}

const anchorStyle = {
  transition: 'opacity 200ms',
  _hover: { opacity: 0.5 },
};

const navAnchorStyle = {
  base: { fontSize: 'sm' },
  desktop: { fontSize: 'md' },
};
