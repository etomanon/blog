import styled from 'styled-components';

export const LoaderWrapper = styled.div`
> div {
    position: fixed;
    height: 5px;
    display: block;
    width: 100%;
    background: ${({theme}) => theme.colors.primary};
    margin: 0;
    top: 0;
    left: 0;
    overflow:hidden;
    z-index: 100;
    > div {
      background: #fff;
        &:before {
            content: '';
            position: absolute;
            background-color: inherit;
            top: 0;
            left:0;
            bottom: 0;
            height:100%;
            will-change: left, right;
            animation: animate 2s cubic-bezier(0.650, 0.815, 0.735, 0.395) infinite;
        }
        &:after {
            content: '';
            position: absolute;
            background-color: inherit;
            top: 0;
            left:0;
            bottom: 0;
            height:100%;
            will-change: left, right;
            animation: animate-short 2s cubic-bezier(0.165, 0.840, 0.440, 1.000) infinite;
            animation-delay: 1.15s;
        }
    }
}
@keyframes animate {
    0% {
        left: -35%;
        right:100%;
    }
    60% {
        left: 100%;
        right: -90%;
    }
    100% {
        left: 100%;
        right: -90%;
    }
}
@keyframes animate-short {
    0% {
        left: -200%;
        right: 100%;
    }
    60% {
        left: 107%;
        right: -8%;
    }
    100% {
        left: 107%;
        right: -8%;
    }
}
`