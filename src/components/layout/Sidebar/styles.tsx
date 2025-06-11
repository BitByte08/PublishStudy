import styled from "@emotion/styled";

export const Container = styled.aside`
    grid-area: sidebar;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 4.5rem 2rem;
`;

export const RootLinkList = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
    justify-content: space-between;
`;

export const ChildLinkList = styled(RootLinkList)`
    justify-content: normal;
    gap: 1rem
`;

export const ButtonContainer = styled.div<{Validation:string;}>`
    width: 100%;
    height: 3.5rem;
    display: flex;
    align-items: center;
    padding: .75rem;
    gap: .5rem;
    border-radius: .5rem;
    box-sizing: border-box;
    background-color: ${(props) => (props.Validation=="toggle"?"#FF9B621A":props.Validation=="login"?"#FAFAFA":"white")};
`;
