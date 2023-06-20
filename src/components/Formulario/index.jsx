import { useEffect, useState } from "react"

const Formulario = () => {

    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => { /*Ativa quando o valor é alterado*/
        console.log('O nome foi alterado')
    }, [nome])
    useEffect(() => { /*Ativa quando o valor é montado*/
        console.log('Materia A mudou para ' + materiaA)
    }, [])
    useEffect(() => { /*Ativa quando o valor é desmontado*/
    console.log('Estamos vencendo')

    return () => {
        console.log('Inimigo desmontado')
    }
}, [])

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            return evento.target.value
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>Olá {nome}, você foi aprovado</p>
            )
        } else {
            return (
                <p>Olá {nome}, você foi reprovado</p>
            )
        }
    }
    
    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(item =>
                    <li>{item}</li>)}
            </ul>
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={({target}) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario