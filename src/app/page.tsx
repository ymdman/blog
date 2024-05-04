import { css } from '../../styled-system/css';
import { Stack } from '../../styled-system/jsx';
import { ParticlesBackground } from '../components/ParticlesBackground';

export default function Home() {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      height="calc(100% - 40px)"
    >
      <p className={css({ fontSize: '5xl', fontWeight: 'bold' })}>
        Welcome to this site.
      </p>
      <ParticlesBackground />
    </Stack>
  );
}
