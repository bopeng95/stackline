import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Container from 'components/Container';
import Header from 'components/Header';
import ItemLayout from 'components/ItemLayout';

// selectors
import { selectHeader, selectData } from './redux/selectors';

// actions
import * as actions from './redux/actions';

const App = (props) => {
  const { headerState, data, loadData } = props;
  const { title } = headerState;
  const { loading, error, item } = data;

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <Header title={title} />
      <ItemLayout item={item} />
    </Container>
  );
};

// change to better names
const mapStateToProps = createStructuredSelector({
  headerState: selectHeader(),
  data: selectData(),
});

export default connect(mapStateToProps, {
  loadData: actions.loadData,
})(App);
