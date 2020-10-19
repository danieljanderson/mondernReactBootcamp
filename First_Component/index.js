class App extends React.Component {
  render() {
    return (
      <div>
        <Hello 
        to="Ringo" 
        from="Paul"
        bangs={4}
       >
        </Hello>
        <Hello 
        to="Britney" 
        from="Adele"
        bangs={10}
       >
        </Hello>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
