import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  ContentTitulo,
  ContentTable,
  Table,
  Titulo,
  ButtonSuccess,
  ButtonInfo,
  ButtonDanger
} from './styles';

export const Home = () => {
  // Usando useState
  const [data, setData] = useState([]);

  const getProdutos = async () => {
    fetch("http://localhost/Api-php/index.php")
      .then((response) => response.json())
      .then((responseJson) => (
        setData(responseJson.records)
      ));
  }

  // usando useEffect
  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <Container>
      <ContentTable>
        <ContentTitulo>
          <Titulo>Listar Produtos</Titulo>
          <Link to="/cadastrar"><ButtonInfo>Cadastrar</ButtonInfo></Link>
        </ContentTitulo>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>TíTULO</th>
              <th>DESCRIÇÃO</th>
              <th>AÇÕES</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(data).map(produto => (
              <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.titulo}</td>
                <td>{produto.descricao}</td>
                <td>
                  <ButtonInfo><i class="fas fa-eye"></i></ButtonInfo>
                  <ButtonSuccess><i class="fas fa-edit"></i></ButtonSuccess>
                  <ButtonDanger><i class="fas fa-trash-alt"></i></ButtonDanger>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ContentTable>
    </Container>
  );
}
