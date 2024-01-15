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
        color: #333;
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

    input,
    select {
        border: none;
        padding: 0;
        vertical-align: middle;
    }

    button {
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        cursor: pointer;
        line-height: 1;
        font-size: 1rem;
        color: #fff;
        background-color: transparent;
    }

    address {
        font-style: normal;
    }
`;

export default GlobalStyle;