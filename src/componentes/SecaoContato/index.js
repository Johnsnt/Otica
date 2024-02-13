import React from "react";
import './estilo.css';

const SecaoContato = () => {
    return (
        <section className='secao-contato'>
            <div className='limita-secao'>
            <h3 id='contato'>Fale conosco</h3>
            <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
            <div className='container-contato'>
                <div className='contato'>
                    <h4>Contato</h4>
                    <figure>
                        <img src="assets/local.png" alt="local" />
                        <figcaption>Nova Iguaçu, RJ</figcaption>
                    </figure>
                    <figure>
                        <img src="assets/telefone.png" alt="tel" />
                        <figcaption>(21) 9999-9999</figcaption>
                    </figure>
                    <figure>
                        <img src="assets/email.png" alt="email" />
                        <figcaption>contato@oticavida.com</figcaption>
                    </figure>
                </div>
                <div className='contato'>
                    <h4>Nossas Redes Sociais</h4>
                    <figure>
                        <img src="assets/fb.png" alt="facebook" />
                        <figcaption>/OticaVida</figcaption>
                    </figure>
                    <figure>
                        <img src="assets/ig.png" alt="instagram" />
                        <figcaption>@oticavidarj</figcaption>
                    </figure>
                    <figure>
                        <img src="assets/tt.png" alt="twitter" />
                        <figcaption>@oticavidarj</figcaption>
                    </figure>
                </div>
            </div>
            </div>
        </section>
    )
}

export default SecaoContato;