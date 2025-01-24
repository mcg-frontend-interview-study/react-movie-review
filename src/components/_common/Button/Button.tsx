import * as S from './Button.styled';

export type ButtonWidth = 'full' | 'half';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
  size?: ButtonWidth;
}

function Button({ content, size = 'full', ...rest }: ButtonProps) {
  return (
    <S.ButtonStyle {...rest} $width={size}>
      {content}
    </S.ButtonStyle>
  );
}

export default Button;
