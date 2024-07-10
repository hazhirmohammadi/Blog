import styled from "styled-components";

export const Container = styled.section<{$margin?:boolean;}>`
    padding-left: 16px;
    padding-right: 16px;
    margin-top: ${prop => prop.$margin ? "40px" : "0"};
    margin-bottom: ${prop => prop.$margin ? "40px" : "0"};
    @media (min-width: 768px) {
        padding-left: 1.25rem /* 20px */
    ;
        padding-right: 1.25rem /* 20px */
    ;
        margin-top: ${prop => prop.$margin ? "50px" : "0"};
        margin-bottom: ${prop => prop.$margin ? "50px" : "0"};
    }
    @media (min-width: 1024px) {
        padding-left: 2.75rem /* 44px */
    ;
        padding-right: 2.75rem /* 44px */
    ;
        margin-top: ${prop => prop.$margin ? "70px" : "0"};
        margin-bottom: ${prop => prop.$margin ? "70px" : "0"};
    }
    @media (min-width: 1280px) {
        padding-left: 3.5rem /* 56px */
    ;
        padding-right: 3.5rem /* 56px */
    ;
        margin-top: ${prop => prop.$margin ? "80px" : "0"};
        margin-bottom: ${prop => prop.$margin ? "80px" : "0"};
    }

    @media (min-width: 1536px) {
        padding-left: 6rem /* 96px */
    ;
        padding-right: 6rem /* 96px */
    ;
        margin-top: ${prop => prop.$margin ? "80px" : "0"};
        margin-bottom: ${prop => prop.$margin ? "80px" : "0"};
    }
`;

export const TitleSection = styled.h2<{$size?:string}>`
    font-size: ${prop=>prop.$size?prop.$size:"20px"};
    @media (min-width: 768px) {
        .md\\:px-5 {
            padding-left: 1.25rem /* 20px */;
            padding-right: 1.25rem /* 20px */;
        }

`;