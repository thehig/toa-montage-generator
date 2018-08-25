import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TerrainForm, MontageOutput } from '../';
import { montageSubmit } from '../../redux/montage';

class MontagePage extends Component {
  onMontageSubmit = evt => {
    this.props.montageSubmit(evt);
    // setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 300);
  };

  render() {
    const { options, content } = this.props;
    return (
      <div>
        <TerrainForm onSubmit={this.onMontageSubmit} initialValues={options} />
        {content && <MontageOutput montage={content} />}
      </div>
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

export { MontagePage as TestableMontagePage };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MontagePage);
