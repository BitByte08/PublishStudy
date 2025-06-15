import styled from "@emotion/styled";
import {Title, Description} from "@/components/ui/global/Textbox";

const MainContainer = styled.article`
    display: grid;
    grid-template-rows: 4.5rem 16.25rem;
    gap: 1rem;
`;
const ButtonListContainer = styled.nav`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
`;
const ButtonContainer = styled.div`
    background-color: #FAFAFA;
    border-radius: .5rem;
    padding: 1.5rem
`;
const Manu = () => {
    return (
        <MainContainer>
            <div>
                <Title>메뉴</Title>
                <Description>원하는 항목을 선택하여 이동하세요.</Description>
            </div>
            <ButtonListContainer>
                <ButtonContainer>
                    <Title>역대 전공동아리 보러가기</Title>
                    <Description>바로가기</Description>
                </ButtonContainer>
                <ButtonContainer>
                    <Title>역대 전공동아리 보러가기</Title>
                    <Description>바로가기</Description>
                </ButtonContainer>
                <ButtonContainer>
                    <Title>역대 전공동아리 보러가기</Title>
                    <Description>바로가기</Description>
                </ButtonContainer>
                <ButtonContainer>
                    <Title>역대 전공동아리 보러가기</Title>
                    <Description>바로가기</Description>
                </ButtonContainer>
            </ButtonListContainer>
        </MainContainer>
    )
}

export default Manu;