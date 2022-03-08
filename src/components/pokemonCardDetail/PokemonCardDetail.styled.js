import styled from 'styled-components';

const PokemonCardDetailComponent = styled.div`
    border: 1px solid;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    width: 300px;
    padding: 20px;
    flex-direction: column;
    transition: all ease .5s;
    position: relative;
    font-size: 14px;
    margin-top: 50px;
    .pokemon-card-header {
        display: flex;
        justify-content: center;
        margin-bottom: 20px; 
        align-items: center;

    }

    .pokemon-card-info {
       align-self: flex-start;

       &__item {
           &__sub {
                display: flex;
                flex-direction: column;
                padding: 5px 0 0 20px;
                &__item {
                    margin-top: 5px;
                }
           }
       }
    }

    .pokemon-card-header,
    .pokemon-card-info {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 15px;
    }

    .close-icon {
        position: absolute;
        top: 15px;
        right: 15px;
        cursor: pointer;
    }
`;

export default PokemonCardDetailComponent;
