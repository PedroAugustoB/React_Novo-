import {Campotexto, Header, Titulo} from './style.jsx'

export function Crud({ titulo }){
    return(
        <Header>
            <Titulo>
                { titulo }
            </Titulo>
            <Campotexto placeholder='oi!!' />

        </Header>
    )
};