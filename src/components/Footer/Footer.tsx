import { css } from '../../../styled-system/css';
import { Stack } from '../../../styled-system/jsx';

export function Footer() {
  return (
    <Stack as="footer" justifyContent="center" direction="row">
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
