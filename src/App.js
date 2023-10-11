import React from "react";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";

class App extends React.Component {
  render(){
    return(
      <>
      <StudentList/>
      {/* <AddStudent/> */}
      </>
    )
  }
}
export default App