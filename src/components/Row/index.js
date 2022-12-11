import { useMemo } from "react";
import styled from "styled-components";

const Row = ({ direction = "row", wrap = "nowrap", children }) => {
  const Component = useMemo(
    () => styled.div`
      display: flex;
      flex-wrap: ${wrap};
      flex-direction: ${direction};
    `,
    [wrap, direction]
  );

  return <Component>
    {children}
  </Component>
};

const Column = ({ flexGrow = 1, flexBasis = 'auto', children }) => {
  const Component = useMemo(
    () => styled.div`
      flex-basis: ${flexBasis};
      flex-grow: ${flexGrow};
    `,
    [flexBasis, flexGrow]
  );

  return <Component>
    {children}
  </Component>
};

export {
  Row, Column
};
