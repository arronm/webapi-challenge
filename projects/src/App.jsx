import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

const Projects = props => {
  return (
    <div className="Projects">
      {
        props.projects.map(project => (
          <>
            <div className="Project">
              <div className="Project__name">{project.name}</div>
              <div className="Project__status">Completed: {project.completed.toString()}</div>
            </div>
            <br />
          </>
        ))
      }
    </div> 
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }

  async componentDidMount() {
    try {
      const { data: projects } = await axios.get('http://localhost:4444/api/projects/')
      console.log(projects);
      this.setState({
        projects,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() { 
    return (
      <div className="App">
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
