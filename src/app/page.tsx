import { css } from '../../styled-system/css';

export default function Home() {
  return <div className={styles}>Hello 🐼!</div>;
}

const styles = css({
  fontWeight: { base: 'normal', desktop: 'bold' },
});
