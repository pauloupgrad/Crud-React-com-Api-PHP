import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    ContentForm,
    ContentTitulo,
    Titulo,
    AlertSuccess,
    AlertDanger,
    Form,
    Label,
    Input,
    ButtonSuccess,
    ButtonInfo
} from './styles';

export const Cadastrar = () => {

    const [produto, setProduto] = useState({
        titulo: '',
        descricao: ''
    });

    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });

    const valorInput = e => setProduto({ ...produto, [e.target.name]: e.target.value });

    const cadProduto = async e => {
        e.preventDefault();
        await fetch("http://localhost/Api-php/cadastrar.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ produto })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.erro) {
                    setStatus({
                        type: 'erro',
                        mensagem: responseJson.mensagem
                    });
                } else {
                    setStatus({
                        type: 'success',
                        mensagem: responseJson.mensagem
                    });
                }
            }).catch(() => {
                setStatus({
                    type: 'erro',
                    mensagem: 'Produto não foi cadastrado com sucesso, tente mais tarde!'
                });
            });
    }

    return (

        <Container>
            <ContentForm>
                <ContentTitulo>
                    <Titulo>Cadastrar Produto</Titulo>
                    <Link to="/">
                        <ButtonInfo>Listar</ButtonInfo>
                    </Link>
                </ContentTitulo>
                {status.type === 'erro' ? <AlertDanger>{status.mensagem}</AlertDanger> : ""}
                {status.type === 'success' ? <AlertSuccess>{status.mensagem}</AlertSuccess> : ""}
                <Form onSubmit={cadProduto}>
                    <Label>Título</Label>
                    <Input type="text" name="titulo" placeholder="Digite o titulo" onChange={valorInput} /><br /><br />
                    <Label>Descrição</Label>
                    <Input type="text" name="descricao" placeholder="Digite um descrição" onChange={valorInput} /><br /><br />

                    <ButtonSuccess type="submit">Cadastrar</ButtonSuccess>
                </Form>
            </ContentForm>
        </Container>
    );
}