import axios from "axios";
import React from "react";

export default class AddStudent extends React.Component{
    constructor(){
        super()
        this.state = {name:""}
        this.onChangeHandle = this.onChangeHandle.bind(this);
        this.onSubmitH = this.onSubmitH.bind(this);

    }

    onChangeHandle(e){
        // console.log(e.target.value)
        this.setState({name:e?.target?.value})
    }
    onSubmitH(e){
        e.preventDefault()
        console.log(this.state.name)
        axios.post("https://my-json-server.typicode.com/ShehrozWaseem/test-json/data",{name:this?.state?.name},
        {headers:  { 
            'Accept': 'application/json',
            'Content-Type': 'application/json'

             }}).then(res=>{
                // Displaying added user in a static way
                this.props.updateStudentList({ name: res?.data?.name, id: res?.data?.id });
                console.log(res)
                // Refreshing the GET req  after three seconds so you can also see the user added functionality
                setTimeout(()=>{
                    this.props.fetchUsers()
                },3000)
        })
        this.setState({name:""})
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmitH}>
                    <label>Enter Name</label>
                    <input type="text" placeholder="enter name to add" onChange={this.onChangeHandle} value={this.state.name}/>
                    <input type="submit"/>
                    {/* {this.state.name.length > 0 && `Last Student Added: ${this.state.name} `} */}
                </form>
            </div>
        )
    }
}