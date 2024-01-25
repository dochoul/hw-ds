import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  width?: string;
  bg?: string;
  grid?: boolean;
  gray?: boolean;
  type?: string;
  title?: string;
  description?: string;
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
  type = "",
  title,
  description,
  children,
}: Props) {
  const styles = {
    width: width && `${width}px`,
    // when gray
    backgroundColor: type === "gray" ? "#f8f8f8" : "",
    borderColor: type === "gray" ? "#ddd" : "",
    // when grid
    backgroundSize: type === "grid" ? "10px,30px,10px 10px,30px 30px" : "",
    backgroundImage:
      type === "grid"
        ? "linear-gradient(90deg, #eaeaea 1px, transparent 1px), linear-gradient(90deg, #eaeaea 1px, transparent 1px), linear-gradient(#eaeaea 1px, transparent 1px), linear-gradient(#eaeaea 1px, transparent 1px)"
        : "",
    backgroundPosition: type === "grid" ? "-1px -1px" : "",
  };
  return (
    <>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Box style={styles}>{children}</Box>
    </>
  );
}
