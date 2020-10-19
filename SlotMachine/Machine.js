class Machine extends React.Component {
    render() {
   if((this.props.s1===this.props.s2)&&this.props.s1===this.props.s3){
    return <p>You Win!!! {this.props.s1} {this.props.s2} {this.props.s3}</p>;
   }
   else{
       return <p>You lose {this.props.s1} {this.props.s2} {this.props.s3}</p>
   }
    }
  }
  