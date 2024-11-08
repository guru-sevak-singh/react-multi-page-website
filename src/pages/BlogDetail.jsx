import React from 'react'
import Header from '../common/Header'
import { useLocation } from 'react-router-dom'
import { data } from '../Data/data';

export default function BlogDetail() {
    let userlocation = useLocation();
    console.log(userlocation);
    let index = userlocation.pathname.replace('/blog/', '')
    try {
        index = Number(index);

        return (
            <div>
                <Header />
                <table>
                    <tr>
                        <th>
                            Name:
                        </th>
                        <td>
                            {data[index].name}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Language:
                        </th>
                        <td>
                            {data[index].language}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Bio:
                        </th>
                        <td>
                            {data[index].bio}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Id:
                        </th>
                        <td>
                            {data[index].id}
                        </td>
                    </tr>

                </table>
            </div>
        )
    }
    catch (error) {
        return (
            <h1>Chala Ja N</h1>
        )
    }
}
