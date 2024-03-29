import { InfinitySpin } from 'react-loader-spinner';
import { LoaderContaimer } from './loader.styled';

const Loader = () => {
  return (
    <LoaderContaimer>
      <InfinitySpin
        visible={true}
        width="600"
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
      />
    </LoaderContaimer>
  );
};

export default Loader;
