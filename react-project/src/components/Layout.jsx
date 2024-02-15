import { Outlet } from "react-router-dom";
import Header from "./header/header";
import styled from "styled-components";

const Container = styled.div`
max-width: 1440px;
padding: 20px 64px 32px 64px; 
`;
const Layout = () => {
    return (
        <Container>
            <Header />
            <Outlet/>
        </Container>
    )
}

export default Layout;