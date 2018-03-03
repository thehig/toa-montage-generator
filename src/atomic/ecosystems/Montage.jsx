import React, { Component } from 'react';
import { connect } from 'react-redux';

import { MontageForm } from '../';
import { montageSubmit } from '../../redux/montage';

class MontagePage extends Component {
  onMontageSubmit = evt => this.props.montageSubmit(evt);

  render() {
    const { montage } = this.props;
    const { options } = montage;
    return (
      <MontageForm onSubmit={this.onMontageSubmit} initialValues={options} />
    );
  }
}

function mapStateToProps(state) {
  return {
    montage: state.montage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    montageSubmit: montageOptions => dispatch(montageSubmit(montageOptions)),
  };
}

export { MontagePage as TestableMontagePage };
export default connect(mapStateToProps, mapDispatchToProps)(MontagePage);
