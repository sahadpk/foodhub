import React from "react";
import UserContext from "../utils/userContext";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "sahad",
        location: "kerala",
      },
    };
  }

  // async componentDidMount() {
    
  //   const data = await fetch("https://api.github.com/users/sahadpk");
  //   const json = await data.json();
  //   this.setState({
  //     userInfo: json,
  //   });
  // }

//  componentDidUpdate(){
    
//  }

//  componentWillUnmount(){

//  }


  render() {
    const { count } = this.state;


    return (
      <div>
        <h1>Profile </h1>
        <UserContext.Consumer>
        {({user})=><h4 className="font-bold text xl p-10">{user.name}<br/>{user.email}<br/>{user.mobile}</h4>}
        </UserContext.Consumer>
        
       
        
        
        
        
        
       
      </div>
    );
  }
}

export default ProfileClass;
