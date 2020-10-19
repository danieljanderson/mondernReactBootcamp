class App extends React.Component {
    render() {
      return (
        <div>
        <Machine
          s1="x"
          s2="y"
          s3="x"
        ></Machine>
        <Machine
          s1="x"
          s2="x"
          s3="x">
        </Machine>
        <Machine
          s1="y"
          s2="z"
          s3="x">
        </Machine>
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));