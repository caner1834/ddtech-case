import styled from 'styled-components';

const PokemonListComponent = styled.div`
    max-width: 1140px;
    min-height: 500px;
    margin: 0 auto;
    padding: 50px;
    .pokemon-list {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: space-between;
        &__cards {
            flex: 0 0 30%;

        }
    }

    .header {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 50px 0;
        flex-direction: column;
        img {
            width: 250px;

        }
    }

    .search-bar {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 20px 0;
        &__input {
            width: 50%;
            font-size: 16px;
        }
    }

    .error-message {
        text-align: center;
        font-size: 18px;
    }
    
    @media  (max-width:767px) {
        .pokemon-list {
            &__cards {
                flex: 0 0 100%;
    
            }
        }
    }   


    @media  (min-width:768px) and (max-width:1023px) {
        .pokemon-list {
            &__cards {
                flex: 1 0 40%;
    
            }
        }
    }   
    
`;

export default PokemonListComponent;
