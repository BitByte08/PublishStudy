import Sidebar from "@/components/layout/Sidebar/index";
import styled from "@emotion/styled";

const MainContainer = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 17.5rem 1fr;
    grid-template-areas: "sidebar content";
`;

const ContentContainer = styled.main`
    grid-area: content;
    overflow-y: auto;
`;

const MainLayout = ({children}:{children?:React.ReactNode}) => {
    return (
        <MainContainer>
            <Sidebar />
            <ContentContainer>
                {children}
            </ContentContainer>
        </MainContainer>
    )
}

export default MainLayout;