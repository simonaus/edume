export const PredictiveTextInstructions = () => {

  return (
    <div style={styles.container}>
      <div style={styles.heading}>Instructions</div>
      <br />
      <div>
        1. Enter a series of digits between 2-9 in the input box below<br />
        2. Press submit to request a list of all possible letter combinations using T9 (Predictive Text)<br />
        3. All possible letter combinations will appear under "Suggested Words"
      </div>
    </div>
  )
};

const styles = {
  container: {
    backgroundColor: '#d4cbe5',
    padding: '2%',
    borderRadius: '5px',
    fontSize: '.7rem',
  },
  heading: {
    fontWeight: 'bold',
  }
}