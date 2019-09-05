import React from 'react';
import './App.css';
import axios from 'axios'

const NavBar = ({ handleChange, setTime }) => {
  // console.log('inside Navbar',setTime);

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
          <input name="advertiser" className="form-control mr-sm-2" type="search" placeholder="Enter brand name" onChange={(e) => handleChange(e)} />
        </form>

        <form className="form-inline" style={{ margin: '10px', marginLeft: '200px' }}>

          <button onClick={setTime} name="timeline" value='365'>Last Year</button>
          <button onClick={setTime} name="timeline" value='730'>Last Two Years</button>
          <button onClick={setTime} name="timeline" value='1095'>Last Three Years</button>

        </form>
      </nav>
    </div>
  )
}

const Table = ({ xyz }) => {
  // console.log('inside table xyz', xyz)
  var display = ''
  if (xyz) {
    // display = xyz.data.map((abc) => (
    display = xyz.data.map((abc) => (
      <tbody>
        <tr>
          <td >
            {abc.name}
          </td>
          {abc.campaigns[0] ? <td >{abc.campaigns[0].name}</td> : <td >No data</td>}
          <td >
            {abc.campaigns.length}
          </td>
        </tr>
      </tbody>
    ))
  } else {
    display = <h1>hi</h1>
  }
  return (
    <table className="table" style={{ maxWidth: '900px' }} >
      <thead>
        <tr>
          <th scope="col">Brand Name</th>
          <th scope="col">First Campaign Name</th>
          <th scope="col">Count of Campaigns inside brand</th>
        </tr>
      </thead>
      {display}
    </table>
  )
}

// SEPARATOR *******************************************************
class App extends React.Component {
  state = {
    apiData: '',
    advertiser: '',
    timeline: ''
  }
  async componentDidMount() {
    await axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/data%20(1)4614ba8.json')
      .then((data) => {
        // console.log('from componentDidMount', data)
        this.setState({
          apiData: data
        })
      })
      .catch((err) => console.log(err))
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  setTime = (e) => {
    e.preventDefault();

    console.log('hello |', e.target.value)
    this.setState({
      timeline: e.target.value
    })
  }

  render() {
    if (this.state.advertiser) {

      let arr = this.state.apiData.data.filter((match => match.advertiserName === this.state.advertiser));
      console.log(arr)

      return (
        <div className="App">
          <NavBar handleSubmitedit={this.handleSubmitedit} handleChange={this.handleChange} setTime={this.setTime} />

          <table className="table" style={{ maxWidth: '900px' }} >
            <thead>
              <tr>
                <th scope="col">Brand Name</th>
                <th scope="col">First Campaign Name</th>
                <th scope="col">Count of Campaigns inside brand</th>
              </tr>
            </thead>
            <tbody>
              {arr.map((abc) => (
                <tr>
                  <td >
                    {abc.name}
                  </td>
                  <td>
                    {abc.campaigns[0] ? <td >{abc.campaigns[0].name}</td> : <td >No data</td>}
                  </td>
                  <td >
                    {this.state.timeline ? abc.campaigns.filter((camp) => {
                      (new Date().valueOf() - new Date(camp.start_date.split('-').reverse().join('-').valueOf())) / (1000 * 3600 * 24) <= this.state.timeline
                    }).length : abc.campaigns.length}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    } else {
      return (
        <div className="App">
          <NavBar handleSubmitedit={this.handleSubmitedit} handleChange={this.handleChange} setTime={this.setTime} />
          <Table xyz={this.state.apiData} />
        </div>
      )
    }
  }
}

export default App;
