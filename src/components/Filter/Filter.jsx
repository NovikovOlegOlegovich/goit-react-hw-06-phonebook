import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from '../../redux/filter/slice';
import { Label, FindInput } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(state => state.contacts);

  const filterHendler = ({ currentTarget }) => {
    dispatch(addFilter(currentTarget.value));
  };

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

export default Filter;
