import { styled } from "styled-components";

export const ListContainer = styled.ul`
  list-style: none;

  li {
    margin-bottom: 5px;
    padding-bottom: 5px;

    &:not(:last-child) {
      border-bottom: 2px solid rgba(0, 0, 0, 0.3);
    }

    &:last-child {
      border-bottom: 2px solid transparent;
    }
  }
`;

export const ListItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100%;
`;

export const ListItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const ListItemTextTitle = styled.p`
  font-weight: bold;
`;

export const ListItemTextSubtitle = styled.p`
  opacity: 0.7;
`;

export const ListItemIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 1rem;
`;

export const ListItemIconAvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: silver;

  width: 100%;
  height: 100%;
  padding: 8px;
`;

export const ListItemActionContainer = styled.div`
  display: flex;
  align-items: center;

  margin-left: auto;
`;
