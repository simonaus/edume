import { SuggestedWord } from './SuggestedWord';
import { useSelector } from 'react-redux'

export const PredictiveTextOutput = () => {

  const suggestedWords = useSelector(state => state.predictiveText.suggestedWords);

  return (
    <div style={styles.container}>
      <div style={styles.heading}>Suggested Words</div>
      <div style={styles.wordContainer}>
        {suggestedWords.map((suggestedWord, index) => {
          return <SuggestedWord text={suggestedWord} key={index} />
        })}
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
    marginBottom: '10px',
  },
  heading: {
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  wordContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  }
}