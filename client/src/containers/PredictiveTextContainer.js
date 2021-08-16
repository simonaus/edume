import { PredictiveTextInstructions } from '../components/PredictiveTextInstructions';

export const PredictiveTextContainer = () => {

  return (
    <div style={styles.container}>
      <PredictiveTextInstructions />
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