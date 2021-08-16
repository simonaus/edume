const getSuggestedWords = async (input) => {
  try {
    console.log('first in api');
    const response = await fetch('http://localhost:3005', {
      method: 'GET',
      body: JSON.stringify(input)
    });
    console.log('in api');
    const words = await response.json();
    return words;
  } catch (e) {
    console.log('There was an error retrieving the suggested words from the server');
    return [''];
  }
}

export { getSuggestedWords };