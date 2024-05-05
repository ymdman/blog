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
        height: '40px',
      })}
    >
      <small
        className={css({
          base: { fontSize: 'xs' },
          desktop: { fontSize: 'sm' },
        })}
      >
        © {new Date().getFullYear()} ymdman.com All Right Reserved.
      </small>
    </Stack>
  );
}
