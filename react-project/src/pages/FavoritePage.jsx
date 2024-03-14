import FavoriteTeachers from "../components/favoriteTeachers/favorite";
import styled from "styled-components";

const WrappContainer = styled.div`
  padding: 96px 128px 96px 128px;
  background-color: #f8f8f8;
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
`;

const FavoritePage = () => {
    return (
        <WrappContainer>
            <FavoriteTeachers/>
        </WrappContainer>
    )
}

export default FavoritePage;