import React from "react";
import { useAnimatedStyle, withTiming } from "react-native-reanimated";
import { Container, Content, Dot } from "./styles";

function Pagination({ pages, currentPage }) {
  return (
    <Container>
      <Content>
        {Array.from({ length: pages }).map((_, index) => {
          const active = index === currentPage;

          const style = useAnimatedStyle(() => {
            const size = withTiming(active ? 8 : 6, { duration: 200 });
            return { width: size, height: size };
          });

          return <Dot key={index} active={active} style={style} />;
        })}
      </Content>
    </Container>
  );
}

export default Pagination;
