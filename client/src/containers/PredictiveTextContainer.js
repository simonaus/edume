import { PredictiveTextInstructions } from '../components/PredictiveTextInstructions';
import { PredictiveTextInput } from '../components/PredictiveTextInput';
import { PredictiveTextOutput } from '../components/PredictiveTextOutput';

export const PredictiveTextContainer = () => {

  return (
    <div style={styles.container}>
      <PredictiveTextInstructions />
      <PredictiveTextInput />
      <PredictiveTextOutput />
    </div>
  )
};

const styles = {
  container: {
    marginTop: '20px',
    marginLeft: '5%',
    marginRight: '5%',
  }
}