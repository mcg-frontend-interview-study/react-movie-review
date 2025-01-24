import * as S from './Title.styled';

interface TitleProps {
  content: string;
}

function Title({ content }: TitleProps) {
  return (
    <div>
      <S.TitleText>{content}</S.TitleText>
    </div>
  );
}

export default Title;
