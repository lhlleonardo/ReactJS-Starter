import styled from 'styled-components';

export const Container = styled.div`
    max-width: 700px;
    margin: 20px auto 0;
    padding: 0 20px;

    article {
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 10px;
        padding: 20px;
        margin-bottom: 20px;

        > strong {
            font-size: 17px;
            color: #000;
        }

        > p {
            font-size: 14px;
            color: #999;
            margin-top: 5px;
            line-height: 25px;
        }

        > a {
            &:hover {
                background: #206a5d;
                color: #f4f4f2;
                border: 2px solid #206a5d;
            }

            height: 42px;
            border-radius: 5px;
            border: 2px solid #191920;
            background: none;
            margin-top: 10px;

            color: #191920;
            font-weight: bold;
            font-size: 15px;
            text-decoration: none;

            display: flex;
            justify-content: center;
            align-items: center;

            transition: all 0.3s;
        }
    }

    > div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;

        button {
            &:hover {
                background: #206a5d;
            }

            padding: 10px;
            border-radius: 10px;
            border: 0;
            background: #191920;
            color: #fff;
            font-size: 15px;
            font-weight: bold;
            transition: all 0.3s;
        }

        button:disabled {
            background: #c4cdd5;
            opacity: 0.9;
            cursor: default;
        }
    }
`;
