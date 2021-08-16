import { SuggestedWord } from './SuggestedWord';

export const PredictiveTextOutput = () => {

  return (
    <div style={styles.container}>
      <div style={styles.heading}>Suggested Words</div>
      <div style={styles.wordContainer}>
        <SuggestedWord text={'dog'} />
      </div>
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#d4cbe5',
    padding: '2%',
    borderRadius: '5px',
    fontSize: '.7rem',
    marginTop: '10px',
  },
  heading: {
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  wordContainer: {
    display: 'flex',
  }
}