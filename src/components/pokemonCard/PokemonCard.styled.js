import styled from 'styled-components';

const PokemonCardComponent = styled.div`
    border: 1px solid;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    min-height: 150px;
    flex-direction: column;
    transition: all ease .5s;

    &:hover {
        cursor: pointer;
        background-color: #EEECEC;
    }

    .pokemon-card__image {
        flex: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        img {
            width: 50px;
        }
    }
    .pokemon-card__link {
        flex: 1;
    }
`;

export default PokemonCardComponent;
