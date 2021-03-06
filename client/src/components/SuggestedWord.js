export const SuggestedWord = (props) => {

  return (
    <div style={styles.container}>
      <div>
        {props.text}
      </div>
    </div>
  )
}

const styles = {
  container: {
    border: '1px solid #bbbbbb',
    backgroundColor: 'white',
    fontSize: '1rem',
    padding: '2px',
    marginRight: '5px',
    marginTop: '5px',
  }
}