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
        height: '70px',
      })}
    >
      <Stack
        as="header"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="1000px"
        height="inherit"
        marginLeft="auto"
        marginRight="auto"
        paddingX={{ base: '15px', desktop: 0 }}
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
        <Stack as="ul" direction="row" gap={{ base: 20, desktop: 50 }}>
          <li>
            <Link href="/about" className={css(anchorStyle, navAnchorStyle)}>
              About
            </Link>
          </li>
          <li>
            <Link href="#" className={css(anchorStyle, navAnchorStyle)}>
              Blog
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
