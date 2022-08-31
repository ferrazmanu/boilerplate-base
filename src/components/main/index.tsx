import * as S from "./styles";

export default function Main({
  title = "React Avançado",
  description = "TypeScript, ReactJS, NextJS e Styled Components",
}) {
  return (
    <S.Wrapper>
      <S.Logo src="/img/logo.svg" alt="logo react avançado com átomo" />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="um desenvolvedor sentado em frente ao computador com código"
      />
    </S.Wrapper>
  );
}
