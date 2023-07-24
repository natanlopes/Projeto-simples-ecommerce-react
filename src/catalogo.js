import { useState } from "react"
import "./catalogo.css"

function Catalogo({addToCart}) {

    const [produto, setProduto] = useState([
        {id: 1, nome: 'Celular 1', preco: 2000, url: "https://m.media-amazon.com/images/I/51-vnt0vSuL._AC_UF1000,1000_QL80_.jpg"},
        {id: 2, nome: "Notebook", preco: 4000, url: "https://m.media-amazon.com/images/I/61i8c2d4tML._AC_UF894,1000_QL80_.jpg"},
        {id: 3, nome: 'Celular 1', preco: 2000, url: "https://m.media-amazon.com/images/I/51-vnt0vSuL._AC_UF1000,1000_QL80_.jpg"},
        {id: 4, nome: "Notebook", preco: 4000, url: "https://m.media-amazon.com/images/I/61i8c2d4tML._AC_UF894,1000_QL80_.jpg"}
    ])

    return (
        <div className="container">
            <h2>Nossos produtos:</h2>
            <ul className="list-card"> {/* Configuração manual da classe*/}
                {produto.map( item => {
                    return (
                        <li key={item.id} className="item-card">
                           
                                <div class="card">
                                    <div class="card-image">
                                    <img src={item.url} />
                                    
                                    <a onClick={() => addToCart(item)} class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                                    
                                    </div>
                                    <div class="card-content">
                                    <span class="card-title">{item.nome}</span>
                                    <p>{item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}</p>
                                    </div>
                                </div>

                        </li>
                    )
                })}
            </ul>

        </div> 
    )
}

export default Catalogo