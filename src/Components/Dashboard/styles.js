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
  display:flex;
  flex-direction:column;
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
  transition: color 0.1s ease;
  color: ${({ active }) => (active ? "#dc9726" : "#ffff")};
`;

export const Header = styled.div`
  width: 100%;
`;

export const DetailsBoard = styled.div`
width:100%;
display:grid;
grid-template-columns: auto auto;
padding:10px;
margin-top:10%;
`
export const DetailsItem = styled.div`
width:100%;
height:100%;
padding:10px;
`

export const Card = styled.div`
margin:auto;
text-align:center;
padding:10px;
border-radius:5px;
cursor:pointer;
box-shadow: 0 0 8px 0 rgba(17, 22, 26, 0.16), 0 4px 8px 0 rgba(17, 22, 26, 0.08), 0 8px 16px 0 rgba(17, 22, 26, 0.08);
transition: all 0.3s ease;
&:hover{
  box-shadow:5px 5px 25px 0px rgba(46, 61, 73, 0.2);
}
`
export const Count = styled.p`
color:#dc9726;
font-weight:600;
font-size:20px;
`
export const Text = styled.p`
font-size: 1.125rem;
font-weight: 600;
line-height: 1.4em;
text-transform:capitalize;
color:#2e3d49;
`
