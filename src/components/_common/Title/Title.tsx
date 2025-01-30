import * as S from './Title.styled';

interface TitleProps {
  content: string;
}

function Title({ content }: TitleProps) {
  return <S.TitleText>{content}</S.TitleText>;
}

export default Title;
