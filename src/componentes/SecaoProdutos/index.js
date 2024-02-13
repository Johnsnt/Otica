import React from "react";
import "./estilo.css";

export default function SecaoProdutos() {
    return (
        <section className="secao-produtos">
            <div className="limitar-secao">
    <h3 id="produtos">Nossos produtos</h3>
    <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
    <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
    <div className="container-cards">
        <div className="card">
            <h4>Óculos de grau</h4>
            <img src="assets/oculos01.png" alt="oculos1" />
            <p>R$ 500,00</p>
        </div>
        <div className="card">
            <h4>Óculos transition</h4>
            <img src="assets/oculos02.png" alt="oculos2" />
            <p>R$ 750,00</p>
        </div>
        <div className="card">
            <h4>Óculos de sol</h4>
            <img src="assets/oculos03.png" alt="oculos3" />
            <p>R$ 700,00</p>
        </div>
        <div className="card">
            <h4>Óculos infantil</h4>
            <img src="assets/oculos04.png" alt="oculos4" />
            <p>R$ 500,00</p>
        </div>
    </div>
    <p>Todos os nossos produtos incluem:</p>
    <ul className="info-produto">
        <li>Garantia de 1 ano</li>
        <li>Manutenção preventiva</li>
        <li>Descontos especiais na compra da segunda unidade</li>
        <li>Flexibilidade de pagamento</li>
    </ul>
</div>
        </section>
    )
}