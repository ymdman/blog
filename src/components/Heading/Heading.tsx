import { css } from '../../../styled-system/css';

type Elm = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingProps = {
  as: Elm;
  children: React.ReactNode;
};

export function Heading({ as: CustomTag, children }: HeadingProps) {
  return (
    <CustomTag className={css({ fontWeight: 'bold', fontSize: '3xl' })}>
      {children}
    </CustomTag>
  );
}
