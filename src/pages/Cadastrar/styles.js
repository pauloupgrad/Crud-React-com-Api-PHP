import styled from 'styled-components';

export const Container = styled.section`
    max-width: 960px;
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
    margin: 10px 0px;
`;
export const AlertSuccess = styled.p`
    background-color: #d1e7dd;
    color: #0f5132;
    padding: 8px 20px;
    border-radius: 6px;
    margin-bottom: 20px;
    border: 1px solid #badbcc;    
`;
export const AlertDanger = styled.p`
    background-color: #f8d7da;
    color: #842029;
    padding: 8px 20px;
    border-radius: 6px;
    margin-bottom: 20px;
    border: 1px solid #f5c2c7;    
`;
export const ContentForm = styled.section`
    max-width: 960px;
    padding: 10px 30px 30px;
`;
export const Form = styled.form`
    margin: 0px auto;
`;
export const Label = styled.label`
    margin: 6px 0px 16px 0px;
    width: 100%;
    padding: 12px 3px;
    font-size: 14px;
    color: #666;
`;
export const Input = styled.input`
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    outline: none;
    margin: 6px 0px 16px 0px;
    resize: vertical;
`;
export const ButtonSuccess = styled.button`
    background-color: #fff;
    color: #198754; 
    padding: 8px 12px;
    border: 1px solid #198754;
    border-radius: 4px;
    cursor: pointer;
    transition: .4s;
    font-size: 18px;
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
    font-size: 18px;
    :hover{
        background-color: #0dcaf0;
        color: #fff;
    }
`;

export const ButtonDanger = styled.button`
    background-color: #fff;
    color: #f8d7da; 
    padding: 6px 12px;
    border: 1px solid #f8d7da;
    border-radius: 4px;
    cursor: pointer;
    transition: .4s;
    font-size: 18px;
    :hover{
        background-color: #f8d7da;
        color: #fff;
    }
`;

