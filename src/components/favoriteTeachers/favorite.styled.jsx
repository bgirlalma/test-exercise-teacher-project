import styled from 'styled-components';

export const WrappContainer = styled.div`
  position: relative;
  min-height: 100vh;
  min-width: 100vh;
`;

export const FavoriteTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  color: #121417;
  margin-bottom: 32px;

  @media screen and (max-width: 470px){
    display: flex;
    justify-content: center;
  }

`;

export const TextPlugContainer = styled.div`
display: flex;
`;

export const TextPlug = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  color: #121417;
`;

export const PositionImage = styled.div`
  position: relative;
`;

export const TeacherList = styled.li`
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 48px;
  padding: 24px;
  background-color: #fff;
  border-radius: 24px;
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 1100px) {
    gap: 20px;
  }

  @media screen and (max-width: 800px) {
    padding: 18px;
  }
`;

export const SvgContainer = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  right: 0;
  margin-top: 21px;
  margin-right: 16px;
  padding: 4px;
  background-color: #fff;
  border-radius: 100%;

  @media screen and (max-width: 1100px) {
    margin-top: 21px;
    margin-right: 25px;
  }

  @media screen and (max-width: 970px) {
    margin-top: 21px;
    margin-right: 30px;
  }
`;

export const Image = styled.img`
  width: 96px;
  height: 96px;
  padding: 12px;
  border-radius: 50%;
  border: 3px solid #fbe9ba;

  @media screen and (max-width: 1100px) {
    width: 85px;
    height: 85px;
  }

  @media screen and (max-width: 970px) {
    width: 75px;
    height: 75px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1330px) {
    flex-direction: column;

    & > :first-child {
      order: 2;
    }
  }
`;

export const DescLanguage = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #8a8a89;

  @media screen and (max-width: 1330px) {
    margin-bottom: 15px;
  }
`;

export const MainTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  color: #121417;
  margin-bottom: 32px;
`;

export const StyledDescInfo = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #121417;
  margin-bottom: 8px;
`;

export const ReadMore = styled.button`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #121417;
  padding: 0;

  text-decoration: underline;
  cursor: pointer;

  background-color: inherit;
  border: none;

  transition: 0.5s ease-in-out;

  &:hover {
    color: #9fbaae;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 32px;
  column-gap: 8px;
  gap: 10px;
`;

export const ListLevels = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(18, 20, 23, 0.2);
  border-radius: 35px;
  padding: 0 12px;
  height: 32px;
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }

  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 114%;
  color: #121417;
  cursor: pointer;

  transition: 0.5s ease-in-out;

  &:hover,
  &:focus {
    background-color: #9fbaae;
  }
`;
