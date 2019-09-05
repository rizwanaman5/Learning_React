import React, { Component } from 'react';
import fetchPopularRepos from './api';

// Functional Component ****************
const SelectedLanguage = ({ SelectedLanguage, updateLanguage }) => {
    const languages = ['JavaScript', 'Python', 'Kotlin', 'Java', 'Ruby', 'C', 'C++', 'C#'];

    return (
        <div >
            {languages.map((language) => (
                <li key={language} onClick={() => updateLanguage(language)} style={SelectedLanguage === language ? { color: "#d0021b" } : null}>
                    {language} </li>))}
        </div>)
}

// Class Based Component **********
class Nav extends Component {

    state = {
        SelectedLanguage: 'C++',
        repos: []
    }

    updateLanguage = (language) => {
        this.setState({
            selectedLanguage: language,
            repos: []
        })

        fetchPopularRepos(this.state.SelectedLanguage).then((data) =>
            this.setState({
                repos: data
            }))
    }

    render() {

        const {repos} = this.state

        return (
            <div>
                <SelectedLanguage updateLanguage={this.updateLanguage} SelectedLanguage={SelectedLanguage} />

                <hr/>

                {repos.map(({ owner }) => (
                    <div >
                        <h1>{owner.login}</h1>
                        <img src={owner.avatar_url} alt='avatar_photo'/>
                        {/* <h2>#{stargazers_count}</h2> */}
                    </div>
                ))}
            </div>
        )
    }
}

export default Nav;