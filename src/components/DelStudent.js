import axios from "axios";
import React from "react";

export default class DelStudent extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
        this.delId = this.delId.bind(this)
        this.state = {id:null}
    }
    delId(){
        axios.delete(`https://my-json-server.typicode.com/ShehrozWaseem/test-json/data/${this.props.id}`,    // query URL without using browser cache
        {headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Expires': '0',
        }}).then(
            res => console.log("deleted res -> ",res,res?.data)
        )
        this.setState({id:this.props.id})
        console.log(this.props.id)
    }

    render(){
        return(
            <>
                <button onClick={this.delId}>Delete</button>
            </>
        )
    }
}