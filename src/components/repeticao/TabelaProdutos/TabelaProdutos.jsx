import React from "react";
import produtos from "../../../data/produtos";
import "./TabelaProdutos.css";

export default _ => {
    return (
        <div className="tabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto, i) => {
                        return (
                            <tr key={produto.id} className={i % 2 === 0 ? 'Par' : ''}>
                                <td>{produto.id}</td>
                                <td>{produto.nome}</td>
                                <td>{produto.preco.toFixed(2)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}