  
  const data = fetch("ornk.json")
  .then(response =>response.json())
  .then(ornk => {
  console.log(ornk);
  console.log(ornk.firstName);
})