    const languageSelect = document.getElementById("language-select");

async function fetchQuote(lang) {
	const url = `https://quotes15.p.rapidapi.com/quotes/random/?language_code=${lang}`;
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': 'a57c42e9a4msh277ec90240ae738p1b5271jsn02b34d92a5cb',
			'x-rapidapi-host': 'quotes15.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);
		const result = await response.json(); // Changed to json() for structured data
		console.log(result.content);
        document.querySelector("h1").textContent = result.content;
        document.querySelector("span").textContent = `-${result.originator.name}-`;
	} catch (error) {
		console.error('Error fetching quote:', error);
	}
}
function generate()
{
    
    
    fetchQuote(languageSelect.value);
   
}