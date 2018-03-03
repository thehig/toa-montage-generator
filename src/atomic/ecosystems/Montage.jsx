import React, { Component } from 'react';
import { connect } from 'react-redux';

import { MontageForm, MontageOutput } from '../';
import { montageSubmit } from '../../redux/montage';

class MontagePage extends Component {
  onMontageSubmit = evt => this.props.montageSubmit(evt);

  render() {
    const { options, content } = this.props;
    return (
      <div>
        <MontageForm onSubmit={this.onMontageSubmit} initialValues={options} />
        { content && <MontageOutput montage={content} /> }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    options: state.montage.options,
    content: state.montage.content,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    montageSubmit: montageOptions => dispatch(montageSubmit(montageOptions)),
  };
}

export { MontagePage as TestableMontagePage };
export default connect(mapStateToProps, mapDispatchToProps)(MontagePage);
