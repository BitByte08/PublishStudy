import {Link} from "react-router-dom";
import {Container, RootLinkList, ChildLinkList, ButtonContainer} from "./styles"

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