import FavoriteTeachers from "../components/favoriteTeachers/favorite";
import styled from "styled-components";

const WrappContainer = styled.div`
  padding: 96px 128px 96px 128px;
  background-color: #f8f8f8;
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;

  @media screen and (max-width: 1300px) {
    padding: 96px;
  }

  @media screen and (max-width: 1100px) {
    padding: 96px 60px;
  }

  @media screen and (max-width: 970px) {
    padding: 96px 40px;
  }

  @media screen and (max-width: 470px) {
    padding: 40px 0;
  }
`;

const FavoritePage = () => {
    return (
        <WrappContainer>
            <FavoriteTeachers/>
        </WrappContainer>
    )
}

export default FavoritePage;