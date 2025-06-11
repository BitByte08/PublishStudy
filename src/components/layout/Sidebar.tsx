import styled from "@emotion/styled";
import {Link} from "react-router-dom";
const Container = styled.aside`
    grid-area: sidebar;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 4.5rem 2rem;
`;

const RootLinkList = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
    justify-content: space-between;
`;

const ChildLinkList = styled(RootLinkList)`
    justify-content: normal;
    gap: 1rem
`;

const ButtonContainer = styled.div`
    width: 100%;
    height: 3.5rem;
    display: flex;
    align-items: center;
    padding: .75rem;
    gap: .5rem;
    box-sizing: border-box;
`;
type LinkButtonProps = {
    link: string;
    image: string;
    title: string;
}
const LinkButton = ({link,image,title}:LinkButtonProps) => {
    return (
        <Link to={link}>
            <ButtonContainer>
                <img src={image} alt={"img"} />{title}
            </ButtonContainer>
        </Link>
    )
}

const Sidebar = () => {
    return (
        <Container>
            <RootLinkList>
                <LinkButton link={"/"} image={""} title={"홈 화면"}/>
                <ChildLinkList>
                    <LinkButton link={"/"} image={""} title={"역대 동아리"} />
                    <LinkButton link={"/"} image={""} title={"캘린더"} />
                    <LinkButton link={"/"} image={""} title={"관리"} />
                    <LinkButton link={"/"} image={""} title={"월말평가"} />
                    <LinkButton link={"/"} image={""} title={"공지사항"} />
                </ChildLinkList>
            </RootLinkList>
            <LinkButton link={"/"} image={""} title={"설정"} />
        </Container>
    )
}

export default Sidebar;