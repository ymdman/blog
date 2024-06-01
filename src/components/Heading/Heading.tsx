import { cva } from '../../../styled-system/css';

type Elm = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingProps = {
  as: Elm;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
};

export function Heading({ as: CustomTag, children, size }: HeadingProps) {
  return <CustomTag className={headingRecipe({ size })}>{children}</CustomTag>;
}

const headingRecipe = cva({
  base: {
    fontWeight: 'bold',
  },
  variants: {
    size: {
      sm: { fontSize: '12px' },
      md: { fontSize: '12px' },
      lg: { fontSize: '36px' },
    },
  },
});
