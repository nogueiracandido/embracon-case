import { useState } from 'react'
import { useForm } from 'react-hook-form'


export function Form (){

    const VIA_CEP = 'https://viacep.com.br/ws'
    const {register, handleSubmit, setValue} = useForm()
    const [cepValid, setCepValid] = useState(0)
    const [userNameValid, setUserNameValid] = useState(0)
    const [emailValid, setEmailValid] = useState(0)
    const [isSubmited, setIsSubmited] = useState(0)

    const displayErrors = (elementName, valid) =>{
        document.querySelector(`input[name="${elementName}"]`).style.border = !valid ? "1px solid #EB0055" : "1px solid #ced4da";
        document.querySelector(`small[name="error--input-small-${elementName}"]`).style.display = !valid ? "block" : "none";
    }

    const checkCEP = async (e) =>{
        if (!e.target.value || isNaN(e.target.value)){
            setCepValid(0)
            setIsSubmited(0)
            displayErrors(e.target.name,0)
            return
        }
        const cep = e.target.value.replace(/\D/g,'')
        try {
            const request = await fetch(`${VIA_CEP}/${cep}/json`)
            const response = await request.json()
            if(response.erro){
                setCepValid(0)
                setIsSubmited(0)
                displayErrors(e.target.name,0)
                return
            }
            setCepValid(1)
            displayErrors(e.target.name,1)
        } catch (error) {
            setCepValid(0)
            setIsSubmited(0)
            displayErrors(e.target.name,0)
            console.log(error)
        }  
    }

    const checkUserName = (e) =>{
        const username = e.target.value
        let IsEmptyOrWhiteSpace = (username.match(/^\s*$/) || []).length > 0
        if(IsEmptyOrWhiteSpace){
            setUserNameValid(0)
            setIsSubmited(0)
            displayErrors(e.target.name,0)
            return
        }
        setUserNameValid(1)
        displayErrors(e.target.name,1)
    }

    const checkEmail = (e) =>{
        const email = e.target.value
        let IsValidEmailAdress = /\S+@\S+\.\S+/
        if(!IsValidEmailAdress.test(email)){
            setEmailValid(0)
            setIsSubmited(0)
            displayErrors(e.target.name,0)
            return
        }
        setEmailValid(1)
        displayErrors(e.target.name,1)
    }

    const onSubmit = () =>{
        setIsSubmited(1)
        setValue('zipcode','')
        setValue('username','')
        setValue('email','')
    }

    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <aside className="form form--login">
                    <h3 className="form--h3">Quer ter oportunidades de vendas nos meios digitais?</h3>
                    <p className="form--simple-text">Cadastre-se abaixo para receber mais novidades.</p>
                    <div className="alert--success" style={{display:  cepValid && userNameValid && emailValid && isSubmited ? 'block' : 'none' }}> 
                        <span>Sucesso! Parabéns, dados cadastrados enviados.</span>
                    </div>
                    <input 
                        {...register("zipcode")} 
                        type="text" 
                        placeholder="CEP" 
                        className="form--input-text"
                        onBlur={checkCEP}
                        
                    />
                    <small name="error--input-small-zipcode" className="form--input-small">Forneça um CEP válido &#40;Apenas números&#41;.</small>
                    <input 
                        {...register("username")}
                        type="text" 
                        placeholder="Nome" 
                        className="form--input-text"
                        onBlur={checkUserName}
                        
                    />
                    <small name="error--input-small-username" className="form--input-small">O campo nome não pode ser vazio.</small>
                    <input 
                        {...register("email")}
                        type="text" 
                        placeholder="E-mail" 
                        className="form--input-text"
                        onBlur={checkEmail}
                    
                    />
                    <small name="error--input-small-email" className="form--input-small">Forneça um e-mail válido.</small>
                    <button disabled={cepValid && userNameValid && emailValid ? '' : 'disabled'} className="form--button">Cadastrar</button>
                </aside>
            </form>
        </>
    )
}