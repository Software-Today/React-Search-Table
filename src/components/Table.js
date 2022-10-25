import './table.css';

export default function Table({columns, data, search}) {
    return (
        <table>
            <thead>
                <tr>
                {columns.map(column => (
                    <th>{column}</th>
                ))}
                </tr>
            </thead>
            <tbody>
                {data.map((ele, index) => (
                    <tr key={index} className={ele.name === search ? 'selected' : ''}>
                        <td key={'name'+ index}>{ele.name}</td>
                        <td key={'rank'+ index}>{ele.rank}</td>
                        <td key={'banana'+ index}>{ele.bananas}</td>
                        <td key={'search'+ index}>{ele.name === search ? 'Yes':'No'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}