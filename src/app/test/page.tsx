"use client"
import React from 'react';
import styled from 'styled-components';

const page = () => {
    return (
        <div>
            <Btn>
                다크 모드
            </Btn>
            <h1>Headline 1</h1>
            <h2>Headline 2</h2>
            <h3>Headline 3</h3>
            <h4>Headline 4</h4>
            <h5>Headline 5</h5>
            <h6>Headline 6</h6>
            <p>p</p>
            <span>span</span>
        </div>
    );
};

const Btn = styled.button`
    padding: 1rem;
    border-radius: 6px;
    background-color: red;
`;

export default page;