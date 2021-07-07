import styled from 'styled-components';

export const Container = styled.section`
    max-width: 1200px;
    margin: 20px auto;
    box-shadow: 0 0 .7em #6c757d;
    border-radius: 10px; 
`;
export const ContentTitulo = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between; 
`;

export const Titulo = styled.h1`    
    color: #069;
    text-transform: uppercase;
    font-size: 1.5rem;
    margin: 10px 0px 20px 0px;
`;
export const ContentTable = styled.section`
    max-width: 1200px;
    padding: 10px 20px 30px;
`;

export const Table = styled.table`
    width: 100%;
    th{
        background-color: #069;
        color: #FFF;
        padding: 10px;
    }    
    td{
        padding: 8px;
        background-color: #eee;
        color: #3e3e3e;                       
    }
    td:first-child, td:last-child{
        text-align: center;
    }
`;

export const ButtonSuccess = styled.button`
    background-color: #fff;
    color: #198754; 
    padding: 6px 12px;
    border: 1px solid #198754;
    border-radius: 4px;
    cursor: pointer;
    transition: .4s;
    font-size: 16px;
    margin-right: 10px;
    :hover{
        background-color: #198754;
        color: #fff;
    }
`;
export const ButtonInfo = styled.button`
    background-color: #fff;
    color: #0dcaf0; 
    padding: 6px 12px;
    border: 1px solid #0dcaf0;
    border-radius: 4px;
    cursor: pointer;
    transition: .4s;
    font-size: 16px;
    margin-right: 10px;
    :hover{
        background-color: #0dcaf0;
        color: #fff;
    }
`;

export const ButtonDanger = styled.button`
    background-color: #fff;
    color: #c0392b; 
    padding: 6px 12px;
    border: 1px solid #c0392b;
    border-radius: 4px;
    cursor: pointer;
    transition: .4s;
    font-size: 16px;
    :hover{
        background-color: #c0392b;
        color: #fff;
    }
`;