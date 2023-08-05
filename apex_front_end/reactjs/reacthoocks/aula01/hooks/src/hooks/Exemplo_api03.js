import { useEffect, useState } from "react";

export default function Exemplo_api03(){
    // State
    const [postagem, setPostagems] = useState([])

    // useEfect
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(retorno => setPostagems(retorno))
    })

    return(
        <table>
            <thead>
                <tr>
                    <th>UserID</th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>

            <tbody>
                {postagem.map(p => (
                    <tr>
                        <td>{p.userId}</td>
                        <td>{p.id}</td>
                        <td>{p.titlep}</td>
                        <td>{p.body}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}