const App=()=> {
    return (
      <div>
        <Tweet
          name="Sam"
          username="sam1"
          date={new Date().toDateString()}
          message="Hello!"
        />
        <Tweet
          name="Alice"
          username="alice2"
          date={new Date().toDateString()}
          message="Good day!"
        />
        <Tweet
          name="Tim"
          username="tim3"
          date={new Date().toDateString()}
          message="My first tweet message!"
        />
      </div>
    );
  }


ReactDOM.render(<App/>, document.getElementById('root'))
