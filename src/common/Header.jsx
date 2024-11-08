import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li> <Link to={'/'}>Home</Link></li>
                    <li>
                        <Link to={'/about'}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to={'/blogs'}>
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link to={'/form'}>
                        Form
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Header
