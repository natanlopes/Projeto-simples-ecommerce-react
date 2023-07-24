import { useEffect, useState } from "react"

function Carrinho( {cart} ) {

    const [total, setTotal] = useState(0)

    useEffect( () => {
        let sum = 0
        for (const item of cart) {
            sum += item.preco
        }
        setTotal(sum)
    }, [cart])

    return (
        <div className="container">
            {cart.map( item => {
                return (
                    <div>
                        <div class="col s12 m7">
                            <h2 class="header">{item.nome}</h2>
                            <div class="card horizontal">
                            <div class="card-image">
                                <img src={item.url}/>
                            </div>
                            <div class="card-stacked">
                                <div class="card-content">
                                <p>{item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}</p>
                                </div>
                                <div class="card-action">
                                <a href="#">Remover do carrinho</a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                )
            })}

<footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Total:</h5>
                <p class="grey-text text-lighten-4">{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>

        </div>
    )
}

export default Carrinho