import React from 'react'
import axios from 'axios'

class App extends React.Component {
	constructor(props){
		super(props)
		this.state = {anecdotes:[], current:0}
	}
	
	componentDidMount = ()=>{
		axios.get('http://korea-ide-api-3001.run.goorm.io/anecdotes')
		.then(res => this.setState({anecdotes: res.data}))
	}
	
	render(){
		if(this.state.anecdotes.length===0){return <div>no anecdotes...</div>}
		return (
			<div>
				<h1>anecdote of the day</h1>
				{this.state.anecdotes[this.state.current].content}	
			</div>
		)
	}
}

export default App