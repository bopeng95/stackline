import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Spinner from 'components/Spinner';
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
  const { loading, item } = data;

  useEffect(() => {
    loadData();
  }, []);

  const Component = <ItemLayout item={item} />;

  return (
    <Container>
      <Header title={title} />
      {loading ? <Spinner type="TailSpin" size={60} /> : Component}
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
