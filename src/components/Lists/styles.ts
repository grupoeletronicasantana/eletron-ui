import { styled } from "styled-components";

export const ListContainer = styled.ul`
  list-style: none;

  li {
    margin-bottom: 8px;
    padding: 0 8px 8px 8px;

    &:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray30};
    }

    &:last-child {
      margin-bottom: 0;
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
  color: ${({ theme }) => theme.colors.gray60};
`;

export const ListItemIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 1rem;

  svg {
    font-size: 20px;
  }
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
  gap: 8px;
  align-items: center;

  margin-left: auto;

  button svg {
    font-size: 16px;
  }
`;
