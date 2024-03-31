import { ButtonWrapp, LoadMore } from './loadmore.styled';

const LoadMoreButton = ({ loadmore }) => {
  return (
    <ButtonWrapp>
      <LoadMore type="button" onClick={() => loadmore()}>
        Load more
      </LoadMore>
    </ButtonWrapp>
  );
};

export default LoadMoreButton;
