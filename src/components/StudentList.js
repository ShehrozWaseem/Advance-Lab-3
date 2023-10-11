import axios from "axios"
import React from "react"
import DelStudent from "./DelStudent";
import AddStudent from "./AddStudent";
class StudentList extends React.Component {
    constructor() { 
        super(); 
        // Initializing the state  
        this.state = { users: [] }; 
      } 
    componentDidMount(){
        this.fetchUsers()
    }

    fetchUsers = () => {
        axios.get("https://my-json-server.typicode.com/ShehrozWaseem/test-json/data").then((res) => {
          this.setState({ users: res?.data });
        });
      };

    // a method to update the state when a student is added
    updateStudentList = (newStudent) => {
        this.setState((prevState) => ({
        users: [...prevState.users, newStudent],
        }));
    };

    
    render(){
        console.log(this.state.users)
        return(
            <>
            <ul>
                {this?.state?.users?.map(item=>(
                    <>
                    <li>{item?.name +" " + item?.id}</li>
                    {/* <button>delete</button> */}
                    <DelStudent id={item?.id}/>
                    </>
                ))}
            </ul>
            <AddStudent updateStudentList={this.updateStudentList} fetchUsers={this.fetchUsers}/>
            </>
        )
    }
}

export default StudentList