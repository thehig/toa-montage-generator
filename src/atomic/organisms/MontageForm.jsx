import { reduxForm } from 'redux-form';
import MontageFormMolecule from '../molecules/MontageForm';

const MontageForm = reduxForm({
  form: 'montage'
})(MontageFormMolecule);

export default MontageForm;