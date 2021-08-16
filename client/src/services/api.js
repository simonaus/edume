const getSuggestedWords = async (input) => {
  try {
    const response = await fetch('http://localhost:3005/suggestedWords', {
      method: 'GET',
      body: JSON.stringify(input)
    });

    const words = await response.json();
    return words;

  } catch (e) {
    console.log('There was an error retrieving the suggested words from the server');
    return [];
  }
}

export { getSuggestedWords };