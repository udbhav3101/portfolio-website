import styled from '@emotion/styled';

const Card = styled.div`
  position: relative;
  display: inline-block;
  background-color: #9147ff;
  &:before,
  &:after {
    content: '';
    display: block;
    background-color: #9147ff;
    width: 8px;
    height: 8px;
    position: absolute;
    transition: all 0.15s ease;
  }
  &:before {
    top: 0;
    left: 0;
    transform-origin: top left;
    transform: rotate(-45deg) scale(0);
  }

  &:after {
    right: 0;
    bottom: 0;
    transform-origin: bottom right;
    transform: rotate(45deg) scale(0);
  }
`;

export default Card;
