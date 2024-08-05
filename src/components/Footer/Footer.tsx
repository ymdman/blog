import { css } from '../../../styled-system/css';
import { Stack } from '../../../styled-system/jsx';

type FooterProps = {
  className?: string;
};

export function Footer({ className }: FooterProps) {
  const footerStyle = css({
    position: 'sticky',
    top: '100vh',
    height: 'var(--footer-height)',
  });

  return (
    <Stack
      as="footer"
      alignItems="center"
      justifyContent="center"
      direction="row"
      className={`${footerStyle} ${className}`}
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
