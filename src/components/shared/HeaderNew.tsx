// this file is only kept for reference purposes
// it was created to provide other options for a dynamic store-based
// header
import React from 'react'
import Link from 'react-router-dom'
import { NavItem } from '../../shared/models/nav.model'

interface NavItemList {
    links: NavItem[]
}


const getNavContent = (page: string): NavItemList => {
    switch (page) {
        case 'login': {
            return {
                links: [
                    {
                        url: '/signup',
                        title: 'Sign Up'
                    }
                ]
            }
        }

        case 'signup': {
            return {
                links: [
                    {
                        url: '/login',
                        title: 'Login'
                    }
                ]
            }
        }

        default:
            return {
                links: []
            }
    }
}

const renderNavContent = (page: string) => {
    const navContent = getNavContent(page)
    return (
        <ul>
            {navContent.links.map(item => (
                <li>
                    <Link to={item.url}>{item.title}</Link>
                </li>
            ))}
        </ul>
    )
}

const NavBar = ({ page }: { page: string }) => {
    return (
        <nav>
            {renderNavContent(page)}
        </nav>
    )
}

interface HeaderProps {
    page: string;
    children: any;
}

export const Header = ({ page }: HeaderProps) => {
    return (
        <header>
            <h1>Questioner</h1>
            <div>
                <NavBar page={page} />
            </div>
        </header>
    )
}
