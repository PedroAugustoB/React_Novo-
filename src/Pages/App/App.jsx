import { Crud } from "../../components/CRUD/Crud";
import { Container, Page } from "./style";


export function App(){
    return(
        <Page>
            <Container>
                <Crud titulo="cliente" />
            </Container>
        </Page>
    )
}

