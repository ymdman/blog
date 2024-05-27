import { css } from '../../../styled-system/css';
import { Stack } from '../../../styled-system/jsx';

export function Footer() {
  return (
    <Stack
      as="footer"
      alignItems="center"
      justifyContent="center"
      direction="row"
      className={css({
        position: 'sticky',
        top: '100vh',
        height: 'var(--footer-height)',
      })}
    >
      <small
        className={css({
          fontSize: 'xs',
        })}
      >
        © {new Date().getFullYear()} ymdman.com All Right Reserved.
      </small>
    </Stack>
  );
}
