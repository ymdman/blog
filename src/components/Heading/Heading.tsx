import { cva } from '../../../styled-system/css';

type Elm = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingProps = {
  size: '3xl' | '4xl' | '5xl';
  as: Elm;
  children: React.ReactNode;
};

export function Heading({ size, as: CustomTag, children }: HeadingProps) {
  return <CustomTag className={headingRecipe({ size })}>{children}</CustomTag>;
}

const headingRecipe = cva({
  base: {
    fontWeight: 'bold',
  },
  variants: {
    size: {
      '3xl': { fontSize: '3xl' },
      '4xl': { fontSize: '4xl' },
      '5xl': { fontSize: '5xl' },
    },
  },
});
