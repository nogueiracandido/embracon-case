import sales from '../images/sales.jpeg'
import { Form } from './Form'


export function Content(){
    return(
        <>
            <section className="container">
                <div className="box">
                    <input type="checkbox" id="toggle" className="box__toggle" hidden />
                    <figure>
                        <img src={sales} alt="Imagem para Oportunidades e Negócios" className="box__image" />
                    </figure>
                    <div className="form form--left-space"></div>
                    <Form />
                </div>
            </section>
        </>
    )
}