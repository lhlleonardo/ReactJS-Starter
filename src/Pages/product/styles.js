import styled from 'styled-components';

export const Container = styled.div`
    max-width: 700px;
    margin: 20px auto 0;
    padding: 20px;
    background: #fff;
    border-radius: 15px;
    border: 1px solid #ddd;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 32px;
    }

    p {
        color: #666;
        line-height: 25px;
        margin-top: 5px;
    }

    a {
        text-decoration: none;
        color: #006fbb;
    }
`;
