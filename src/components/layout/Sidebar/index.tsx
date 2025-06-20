import {Link} from "react-router-dom";
import {MainContainer, RootLinkList, ChildLinkList, ButtonContainer} from "./styles"

type LinkButtonProps = {
    link: string,
    image: string,
    title: string,
    Validation?: string
}
const LinkButton = ({link, image, title, Validation}: LinkButtonProps) => {
    return (
        <Link to={link}>
            <ButtonContainer Validation={Validation}>
                <img src={image} alt={"img"}/>{title}
            </ButtonContainer>
        </Link>
    )
}

const Sidebar = () => {
    return (
        <MainContainer>
            <RootLinkList>
                <LinkButton link={"/"} image={""} title={"로그인"} Validation={"login"} />
                <ChildLinkList>
                    <LinkButton link={"/"} image={""} title={"홈화면"} Validation={"toggle"}/>
                    <LinkButton link={"/"} image={""} title={"역대 동아리"}/>
                    <LinkButton link={"/"} image={""} title={"캘린더"}/>
                    <LinkButton link={"/"} image={""} title={"관리"}/>
                    <LinkButton link={"/"} image={""} title={"월말평가"}/>
                    <LinkButton link={"/"} image={""} title={"공지사항"}/>
                </ChildLinkList>
            </RootLinkList>
            <LinkButton link={"/"} image={""} title={"설정"}/>
        </MainContainer>
    )
}

export default Sidebar;