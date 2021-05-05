import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/ContactForm/ContactForm-actions';
import selectors from '../../redux/ContactForm/ContactForm-selectors';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export default function Filter() {
  const filterState = useSelector(selectors.getFilter);
  const dispatch = useDispatch();
  const onFilterChange = useCallback(
    event => dispatch(actions.filterChange(event.target.value)),
    [dispatch],
  );

  return (
    <Form inline>
      <FormControl
        type="text"
        name="filter"
        value={filterState}
        onChange={onFilterChange}
        placeholder="Search"
        className="mr-sm-2"
      />
      <Button variant="primary">Search</Button>
    </Form>
  );
}

Filter.propTypes = {
  filters: PropTypes.string,
  onFilterChange: PropTypes.func,
};
