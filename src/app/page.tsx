import { css } from '../../styled-system/css';
import { Stack } from '../../styled-system/jsx';
import { ParticlesBackground } from '../components/ParticlesBackground';

export default function Home() {
  return (
    <Stack justifyContent="center" alignItems="center" height="100%">
      <p
        className={css({
          fontSize: { base: '3xl', desktop: '6xl' },
          fontWeight: 'bold',
        })}
      >
        Welcome to this site.
      </p>
      <ParticlesBackground />
    </Stack>
  );
}
