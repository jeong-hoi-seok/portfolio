import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Pretendard', sans-serif;
        font-weight: 400;
    }

    html,
    body,
    div,
    span,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    abbr,
    address,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    samp,
    small,
    strong,
    sub,
    sup,
    var,
    b,
    i,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        vertical-align: baseline;
        background: transparent;
        color: #282830;
    }

    html {
        font-size: 16px;
    }

    body {
        line-height: 1;
        font-size: 1rem;
    }

    html, body, #__next {
        height: 100%;
    }

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
        display: block;
    }

    ul {
        list-style-type: none;
    }

    a {
        margin: 0;
        padding: 0;
        font-size: inherit;
        vertical-align: baseline;
        background: transparent;
        text-decoration: none;

    }

    a:link,
    a:visited {
        text-decoration: none;
        color: inherit;
    }

    a:link:active,
    a:visited:active {
        color: inherit;
    }


    mark {
        background-color: #ff9;
        color: #000;
        font-style: normal;
        font-weight: bold;
    }

    del {
        text-decoration: line-through;
    }

    abbr[title],
    dfn[title] {
        border-bottom: 1px dotted;
        cursor: help;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    hr {
        display: block;
        height: 1px;
        border: 0;
        padding: 0;
    }

    address {
        font-style: normal;
    }

    h1 {
        font-size: 4.5rem;
        font-weight: 700;
        line-height: 1.25;
        letter-spacing: -0.05rem;
    }
    h2 {
        font-size: 3.75rem;
        font-weight: 600;
        line-height: 1.2;
        letter-spacing: -0.025rem;
    }
    h3 {
        font-size: 3rem;
        font-weight: 500;
        line-height: 1.2;
    }
    h4 {
        font-size: 2.25rem;
        font-weight: 500;
        line-height: 1.2;
    }
    h5 {
        font-size: 1.5rem;
        line-height: 1.1;
    }
    h6 {
        font-size: 1.3125rem;
        line-height: 1.1;
    }
    p {
        word-break: break-all;
        line-height: 1.2;
    }
    span {
        line-height: 1.2;
    }

    button {
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        font-size: 1rem;
        background-color: transparent;
        cursor: pointer;
    }
    input,
    select {
        font-size: 1rem;
        border: none;
        padding: 0;
        vertical-align: middle;
    }
    input::placeholder {
        font-size: inherit;
    }
    textarea {
        font-size: 1rem;
    }
`;

export default GlobalStyle;