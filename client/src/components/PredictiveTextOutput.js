export const PredictiveTextOutput = () => {

  return (
    <div style={styles.container}>
      <div style={styles.heading}>Suggested Words</div>
      <div style={styles.wordContainer}>

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
  },
  wordContainer: {
    display: 'flex',
  }
}