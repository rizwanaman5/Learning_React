import React, { Component } from "react"
import data from "./JSON"
import TableRows from "./TableRows"


class App extends Component {
    state = {
        advertiser: null,
        timeline: 0
    }
    handleAdvertiser = (e) => {
        this.setState({
            advertiser: e.target.value
        })
    }
    timeline = (e) => {
        this.setState({
            timeline: e.target.value
        })
    }
    render() {
        let array = data.data;
        let trows;
        let now = new Date().valueOf()
        let options = array.map((obj) => (
            <option>{obj.advertiserName}</option>
        ))
        if (this.state.advertiser && this.state.timeline) {
            array = array.filter((obj) => obj.advertiserName == this.state.advertiser)
            let modarray = array.map((obj) => {
                obj.campaigns = obj.campaigns.filter((camp) => {
                    var x = new Date(camp.start_date.split("-").reverse().join("-")).valueOf();
                    var y = this.state.timeline * 24 * 3600 * 1000;
                    if (x > (now - y)) {
                        return true
                    }
                })
            }
            )
            console.log(array)
            trows = array.map((obj) => (
                <TableRows obj={obj} />
            ))
        }
        if (this.state.advertiser && !this.state.timeline) {
            array = array.filter((obj) => obj.advertiserName == this.state.advertiser)
            trows = array.map((obj) => (
                <TableRows obj={obj} />
            ))
        } else {
            trows = array.map((obj) => (
                <TableRows obj={obj} />))
        }
        return (
            <div>
                <select type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Select the advertiser" value={this.state.advertiser} onChange={this.handleAdvertiser}>
                    {options}
                </select>
                <select type=" text"
                    class=" form-control" name="" id="" aria-describedby=" helpId" placeholder=" timeline" value={this.state.timeline} onChange={this.timeline}>
                    <option value="365">Last Year</option>
                    <option value="730"> Last 2 Years</option >
                    <option value="1095"> Last 3 Years</option >
                </select >
                <table class=" table">
                    <thead>
                        <tr>
                            <th>Brand Name</th>
                            <th>First Campaign</th>
                            <th>Count of Campaingns</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trows}
                    </tbody>
                </table>
            </div >
        )
    }
}

export default App;