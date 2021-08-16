import { PredictiveTextInstructions } from '../components/PredictiveTextInstructions';
import { PredictiveTextInput } from '../components/PredictiveTextInput';

export const PredictiveTextContainer = () => {

  return (
    <div style={styles.container}>
      <PredictiveTextInstructions />
      <PredictiveTextInput />
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