import styled from 'styled-components';

export const Menu = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  margin: 0 30px 0 100px;
  padding: 0;
  pointer-events: auto;

  @media (max-width: 1024px) {
    margin: 0 30px;
  }
  @media (max-width: 600px) {
    z-index: 5;
  }

  li {
    list-style: none;
    margin: 0;

    a {
      text-decoration: none;
      color: #fff;
      padding: 8px 20px;
      border: 1px solidrgba(255, 255, 255, 0);
      transition: 1s;
      border-radious: 14px;

      :hover {
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
    }
  }

  button {
    margin: 0;
    width: auto;
    background: rgba(31, 66, 250, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.4);
  }

  @media (max-width: 800px) {
    justify-content: space-between;
    li:nth-child(2),
    li:nth-child(3),
    li:nth-child(4),
    li:nth-child(5) {
      display: none;
    }
  }
`;
