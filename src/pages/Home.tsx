import styled from "@emotion/styled";
import MainLayout from "@/layouts/MainLayout";
import Banner from "@/components/ui/Home/Banner"
import Manu from "@/components/ui/Home/Manu"

const MainContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
`;
const Home = () => {
    return (
        <MainLayout>
            <MainContainer>
                <Banner />
                <Manu />
            </MainContainer>
            <div>
                
            </div>
        </MainLayout>
    )
}

export default Home