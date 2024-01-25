import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  width?: string;
  title?: string;
  description?: string;
  bg?: string;
  children: ReactNode;
}

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: #888;
  font-size: 12px;
  margin-bottom: 20px;
  letter-spacing: -0.5px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px #ddd;
  border-radius: 4px;
  width: 960px;
  padding: 30px;
  margin-bottom: 60px;
  min-width: 200px;
  min-height: 200px;
`;

export default function PlayGround({
  width,
  title,
  description,
  children,
}: Props) {
  const styles = {
    width: width ? `${width}px` : "",
  };

  return (
    <>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Box style={styles}>{children}</Box>
    </>
  );
}
