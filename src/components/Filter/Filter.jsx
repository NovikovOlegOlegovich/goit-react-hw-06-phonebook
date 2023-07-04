import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Label, FindInput } from './Filter.styled';

const Filter = ({ filterHendler }) => {
  const { filter } = useSelector(state => state.contacts);

  return (
    <Label>
      Find contacts by name
      <FindInput
        type="text"
        value={filter}
        onChange={filterHendler}
      ></FindInput>
    </Label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  filterHendler: PropTypes.func.isRequired,
};

export default Filter;
