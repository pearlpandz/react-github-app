import React, { Component } from 'react';
import Spinner from './../helpers/Spinner';
import { Link } from 'react-router-dom';

export class SingleUser extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
    }
    render() {
        const { name, company, email, avatar_url, bio, blog, login, followers, following, public_repos, public_gists, hireable } = this.props.user;

        const { loading } = this.props.loading;

        if (loading) {
            return (
                <div className="spinner">
                    <Spinner />
                </div>
            )
        } else {
            return (
                <>
                    <ul className="breadcrumb flex justify-between li-style-none">
                        <li>
                            <Link to="/">
                                <strong> <i className="fas fa-chevron-left"></i> Home</strong>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <strong>{hireable ? <i className="success-color fas fa-check"></i> : <i className="danger-color fas fa-times"></i>} Hireable</strong>
                            </Link>
                        </li>
                    </ul>
                    <div className="profile inner-container" style={{'margin-top':'50px'}}>
                        <div className="flex">
                            <div className="pic text-center" style={{ 'flex-basis': '25%' }}>
                                <img className="img-circle" style={{'width': '175px'}} src={avatar_url} alt="" />
                            </div>
                            <div className="info flex direction-column" style={{ 'flex-basis': '75%' }}>
                                <h4 className="mb-15">{name} ({login})</h4>
                                {bio && <p className="mb-10">{bio}</p>}
                                {company && <p className="mb-10">Company: {company}</p>}
                                {blog && <p className="mb-10">Website: {blog}</p>}
                                {email && <p className="mb-10">Email: {email}</p>}
                                <div className="btn-group flex mt-10">
                                    <a href="/" className="btn bg-primary color-primary mr-5">Following <span className="badge">{following}</span></a>
                                    <a href="/" className="btn bg-secondary color-primary mr-5">Followers <span className="badge">{followers}</span></a>
                                    <a href="/" className="btn bg-light color-secondary mr-5">Public Repositories <span className="badge">{public_repos}</span></a>
                                    <a href="/" className="btn bg-dark color-primary mr-5">Public Gists <span className="badge">{public_gists}</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
    }
}

export default SingleUser
