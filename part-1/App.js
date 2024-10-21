const App= ()=> {
    return (
      <div>
        <FirstComponent />
        <NamedComponent name="Susan" />
      </div>
    );
  }


ReactDOM.render(<App/>, document.getElementById('root'))
