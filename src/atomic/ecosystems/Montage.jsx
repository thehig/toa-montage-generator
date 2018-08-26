import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { MontageOptions, MontageOutput } from '../';
import { montageSubmit } from '../../redux/montage';

class MontagePage extends Component {
  onMontageSubmit = evt => {
    this.props.montageSubmit(evt);
    // setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 300);
  };

  render() {
    const { options, content } = this.props;
    return (
      <Fragment>
        <MontageOptions onSubmit={this.onMontageSubmit} initialValues={options} />
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
    montageSubmit: montageOptions => dispatch(montageSubmit(montageOptions))
  };
}

MontagePage.propTypes = {
  montageSubmit: PropTypes.func,
  options: PropTypes.object,
  content: PropTypes.object
};

export { MontagePage as TestableMontagePage };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MontagePage);
