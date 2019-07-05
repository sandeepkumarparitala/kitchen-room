import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

export const SideMenu = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);
  background: #383c48;
  min-width: 300px;
`;
export const Main = styled.div`
  height: 100%;
  width: 80%;
`;

export const Title = styled.div`
  margin: 2rem;
  background: #dc9726;
  padding: 10px;
  color: white;
  text-align: center;
  border-radius: 3px;
`;

export const Options = styled.div`
  padding: 20px;
`;

export const Tile = styled.li`
  margin-bottom: 2rem;
  color: white;
  cursor: pointer;
  list-style: none;
  color: ${({ active }) => (active ? "#dc9726" : "#ffff")};
`;
