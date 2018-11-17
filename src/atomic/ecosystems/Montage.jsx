import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { MontageOptions, MontageOutput } from '../';
import { montageSubmit, montageReset } from '../../redux/montage';

class MontagePage extends Component {
  render() {
    const { options, content, montageSubmit, montageReset } = this.props;
    return (
      <Fragment>
        <MontageOptions
          initialValues={options}
          onSubmit={montageSubmit}
          handleReset={montageReset}
        />
        {content && <MontageOutput montage={content} />}
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    options: state.montage.options,
    content: state.montage.content
  };
}

function mapDispatchToProps(dispatch) {
  return {
    montageSubmit: montageOptions => dispatch(montageSubmit(montageOptions)),
    montageReset: evt => dispatch(montageReset(evt))
  };
}

MontagePage.propTypes = {
  montageSubmit: PropTypes.func,
  montageReset: PropTypes.func,
  options: PropTypes.object,
  content: PropTypes.object
};

export { MontagePage as TestableMontagePage };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MontagePage);
