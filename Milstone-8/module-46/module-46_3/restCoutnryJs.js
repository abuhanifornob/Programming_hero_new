const loadReastCountr = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => disPlayCountry(data));
};

const disPlayCountry = (countres) => {
  const allCountryHTML = countres.map((country) => countryHtml(country));
  const countryDiv = document.getElementById("countryContainer");
  console.log(allCountryHTML);
  countryDiv.innerHTML = allCountryHTML;
};

const countryHtml = (country) => {
  return `
  <div>
             <h1>${country.name.common}</h1>    
    </div>
    `;
};

loadReastCountr();
