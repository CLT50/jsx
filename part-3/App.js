const App= ()=> {
    return (
      <div>
        <Person
          name="Homer"
          age={38}
          hobbies={["bowling", "skiing"]}
        />
        <Person 
          name="Marge" 
          age={34} 
          hobbies={["drawing", "watching tv"]} 
        />
        <Person
          name="Bart"
          age={10}
          hobbies={["skateboarding", "painting"]}
        />
        <Person
          name="Lisa"
          age={8}
          hobbies={["reading", "eating"]}
        />
      </div>
    );
  }


ReactDOM.render(<App/>, document.getElementById('root'));
