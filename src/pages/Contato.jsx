import { useState } from 'react'
import { Header } from '../components/Header'
import contato from '../assets/contato.svg'
import { database } from '../services/firebase'
import { ref, push, set } from 'firebase/database'

import styles from '../styles/pages/contato.module.css'

export function Contato() {
    const [nome, setNome] = useState('')
    const[email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')

    function handInputName(event){
        setNome(event.target.value)

    }

    function handInputEmail(event){
        setEmail(event.target.value)

    }

    function handInputMensagem(event){
        setMensagem(event.target.value)

    }

    function createMessage (event){
        event.preventDefault()

        console.log('nome: ', nome)
        console.log('email: ', email)
        console.log('mensagem: ', mensagem)

        //dentro do firebase cria uma tabela de mensagens
        const mensagensListRef = ref(database, 'mensagens')

        //dentro da tabela de mensagens crie uma nova variavel
        const novaMensagemRef = push(mensagensListRef)

        //Dizer o que vai em cada mensagem
        set(novaMensagemRef, {
            nome: nome,
            email: email,
            texto: mensagem
        })

        setNome('')
        setEmail('')
        setMensagem('')
    }
    return(
        <>
            <Header text="Contato" image={contato} />
            <div className={styles.formContainer}>
                <form onSubmit={createMessage} className={styles.form}>
                    <input onChange={handInputName} placeholder="Digite seu nome" className={styles.formInput} value={nome} />
                    <input onChange={handInputEmail} placeholder="Digite seu email" className={styles.formInput} value={email}/>
                    <textarea onChange={handInputMensagem} placeholder="Digite sua mensagem" className={styles.formTextArea} value={mensagem} />
                    <button className={styles.formButton} type="submit">Enviar</button>
                </form>
            </div>
        </>
    )
}