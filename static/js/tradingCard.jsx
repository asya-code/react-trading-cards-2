
//create function TradingCard, child component
function TradingCard(props) {
  return (
    // create a div for each card containing name, url and skill properties
    <div className="card">    
      <p>Name: {props.name}</p>
      <img src={props.imgUrl} alt="profile" />
      <p>Skill: {props.skill} </p>
    </div>
  );
}
// to insert the whole cards list into the HTML
// parent component
function TradingCardContainer() {  
 
//control values on what is getting rendered
//we need to make it a state b/c there will be new cards coming in
//making it a thing that needs to be changed, aka mutable
//current state value ([]) and then function to update(setCards)
//cards is a state, and when cards change component updates
  
  const [cards, setCards] = React.useState([])
   //uses AJAX to build
  // send the request for card data through HTTP request, 
  //to help update the state of our component w/ info from server
  //useEffect = hook to take callback function, which is our AJAX fetch request
  //[] stops from re rendering...but why would it do that? nothing changes. 
  React.useEffect(() => {
    fetch("/cards.json")
    // parses data as JSON
      .then((response) => response.json())
    // updates component's state
      .then((data) => setCards(data.cards));
  }, [])

  const tradingCards = [];

  for (const currentCard of cards) {
    tradingCards.push(
      <TradingCard
        key={currentCard.cardId}
        name={currentCard.name}
        skill={currentCard.skill}
        imgUrl={currentCard.imgUrl}
      />,
    );
  }
  // console.log(<div className="grid">{tradingCards}</div>);
  // return <div className="grid">{tradingCards}</div>;
  return (
    <React.Fragment>
      <AddTradingCard />
      <h2>Trading Cards</h2>
      <div className="grid">{tradingCards}</div>
    </React.Fragment>
  );
}

//a new piece of info that can't be changed is prop
//ReactFragment is wrapping HTML elements beyond HTML tags
function AddTradingCard(props) {
  const [name, setName] = React.useState("");
  const [skill, setSkill] = React.useState("");
  function addNewCard() {
    // TO BE IMPLEMENTED
    alert('trying to add new card');
  }
  return (
    <React.Fragment>
      <h2>Add New Trading Card</h2>
      <label htmlFor="nameInput">Name</label>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        id="nameInput"
        style={{ marginLeft: "5px" }}
      ></input>
      <label
        htmlFor="skillInput"
        style={{ marginLeft: "10px", marginRight: "5px" }}
      >
        Skill
      </label>
      <input
        value={skill}
        onChange={(event) => setSkill(event.target.value)}
        id="skillInput"
      ></input>
      <button style={{ marginLeft: "10px" }} onClick={addNewCard}>
        Add
      </button>
    </React.Fragment>
  );
}
//render a list of cards @Container
ReactDOM.render(<TradingCardContainer />, document.getElementById('container'));

// function addCard() {

//   const formInputs = {
//     name: document.querySelector(SOMETHING),
//     skill: docuement.querySelector(SOMETHING)
//   };

//   fetch("/add-card", {
//     method: 'POST',
//     body: JSON.stringify(formInputs),
//     headers: {
//       'Content-Type': 'application/json',
//     }
//   })
//   {
//     .then((response) => response.json())
//     .then((data) => setCards(data.cards));
//   }
  
// }

  // Attach the addNewCard function to the 'Add' button click.
  // document.querySelector("#addCard").addEventListener("click", addNewCard);
// const formInputs = {
//   type: document.querySelector('#type-field').value,
//   amount: document.querySelector('#amount-field').value,
// };
// fetch('/new-order', {
//   method: 'POST',
//   body: JSON.stringify(formInputs),
//   headers: {
//     'Content-Type': 'application/json',
//   },
// })

// <div>
//   <h2>Add New Trading Card</h2>

//   Name <input type="text" id="nameField" /> Skill
//   <input type="text" id="skillField" />
//   <button id="addCard">Add</button>

//   <h2>Trading Cards</h2>
// </div>
// @app.route("/add-card", methods=["POST"])
// def add_card():
//     """Add a new card to the DB."""
//     name = request.get_json().get("name")
//     skill = request.get_json().get("skill")

//     new_card = {
//         "name": name,
//         "skill": skill,
//         "imgUrl": "/static/img/placeholder.png",
//         "cardId": len(CARD_DATA) + 1,
//     }
//     CARD_DATA.append(new_card)
//     return jsonify({"success": True, "cardAdded": new_card})




