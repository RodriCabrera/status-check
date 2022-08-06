import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  padding: 1rem;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const Card = styled.div`
  text-align: center;
  border: 1px solid lightgray;
  width: 210px;
  min-height: 200px;
  padding: 10px;
  border-radius: 10px;
  -webkit-box-shadow: 6px 4px 15px 2px rgba(91, 91, 91, 0.61);
  box-shadow: 6px 4px 15px 2px rgba(91, 91, 91, 0.61);
`;
export const StatusText = styled.h4`
  background-color: ${({ error }) => (error ? "tomato" : "lightgreen")};
`;
