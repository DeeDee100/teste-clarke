import Card from "./Card"
import Banner from "./Banner"
import Footer from "./Footer"


export default function Home() {

    return (
        <div>
            <Card
                className='section'
                title='Sobre Nós'
                img="/img/raio.jpg"
                description='A Clarke dá suporte total à sua empresa para que ela consiga comprar eletricidade diretamente de geradores e comercializadores no Mercado Livre de Energia.'
            />
            <Banner />
            <Card
                className='section'
                title='Nossos diferenciais'
                img="/img/energia_limpa.jpg"
                description='Atendimento Consultivo, Melhores preços, Plataforma tecnológica'
            />
            <Card
                className='section'
                title='No Mercado Livre de Energia, a economia é de até 40% na conta'
                img="/img/energia_limpa.jpg"
                description='Quem participa do Mercado Livre de Energia ou Ambiente de Contratação Livre (ACL) pode negociar todas as condições comerciais das contratações, como fornecedor, quantidade, preço, período de suprimento e forma de pagamento.'
            />
            <Footer />
        </div>

    );
};
