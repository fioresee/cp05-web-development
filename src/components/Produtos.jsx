
import React, {useState, useEffect} from 'react' // Importando React e os hooks useState e useEffect

const Produtos = () => { //criando componente produtos 
    
    const [comidas, setComidas] = useState([]);
    const [busca, setBusca] = useState('');
    const [tempoMaximo, setTempoMaximo] = useState('');
    const [cardAberto, setCardAberto] = useState(null); 

    useEffect (() => {

        const fetchData = async () => {

            const response = await fetch( // chamando a API para buscar receitas aleatórias
                'https://api.spoonacular.com/recipes/random?number=5&apiKey=ea5ff8f35fb74716b8a44dc96f00d4a7'
            );

            const data = await response.json(); //transformando a resposta em JSON

            setComidas(data.recipes); 


        };

        fetchData();

    }, []);

    const receitasFiltradas = comidas.filter((receita) => {
    const correspondeBusca = receita.title
        .toLowerCase()
        .includes(busca.toLowerCase());

    const correspondeTempo =
        tempoMaximo === '' || receita.readyInMinutes <= Number(tempoMaximo);

    return correspondeBusca && correspondeTempo;
});


    return (

        <div className="min-h-screen bg-orange-50 text-gray-800">

            {/* HEADER */}
            <header className="bg-white shadow-sm sticky top-0 z-50">

                <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

                    {/* LOGO */}
                    <div className="flex items-center gap-2 text-2xl font-bold">

                        <img src="./public/GourmetOn.png" alt="Logo" className="h-20 w-20"/> 

                        <span>
                            Gourmet<span className="text-orange-500">ON</span>
                        </span>

                    </div>
                    

                    {/* MENU */}
                    <nav className="hidden md:flex items-center gap-7">

                        <a
                            href="#inicio"
                            className="text-gray-600 hover:text-orange-500 font-medium transition scroll-mt-20 px-6"
                        >
                            Início
                        </a>

                        <a
                            href="#cardapio"
                            className="text-gray-600 hover:text-orange-500 font-medium transition scroll-mt-20 px-6"
                        >
                            Cardápio
                        </a>

                        <a
                            href="#depoimentos"
                            className="text-gray-600 hover:text-orange-500 font-medium transition scroll-mt-20 px-6"
                        >
                            Depoimentos
                        </a>

                        <a
                            href="#sobre"
                            className="text-gray-600 hover:text-orange-500 font-medium transition scroll-mt-20 px-6"
                        >
                            Sobre nós
                        </a>

                        <a
                            href="#contato"
                            className="text-gray-600 hover:text-orange-500 font-medium transition scroll-mt-20 px-6"
                        >
                            Contato
                        </a>

                    </nav>


                    {/* BOTÃO */}
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full font-semibold transition cursor-pointer shadow-lg">
                        Download App
                    </button>

                </div>

            </header>


            {/* HERO */}
            <main>

                <section
                    className="max-w-7xl mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center justify-between gap-12 scroll-mt-20 py-20 px-6"
                    id="inicio"
                >

                    {/* TEXTO */}
                    <div className="max-w-2xl">

                        <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            🍳 Seu próximo prato favorito
                        </span>


                        <h1 className="text-5xl md:text-6xl font-bold leading-tight">

                            Descubra receitas

                            <span className="text-orange-500">
                                incríveis
                            </span>

                        </h1>


                        <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">

                            Encontre receitas deliciosas e descubra novas
                            ideias para transformar seus momentos na cozinha.

                        </p>


                        <a
                            href="#cardapio"
                            className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-full font-bold transition shadow-lg"
                        >
                            Ver cardapio →
                        </a>

                    </div>


                    {/* IMAGEM */}
                    <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-orange-100 flex items-center justify-center text-9xl shadow-xl">

                        <img src="./public/GourmetOn.png" alt="Logo" className="h-80 w-80 animate-float"/>

                    </div>

                </section>


                {/* CARDÁPIO */}
                <section
                    className="bg-white py-20"
                    id="cardapio"
                >

                    <div className="max-w-7xl mx-auto px-6">


                        {/* TÍTULO */}
                        <div className="text-center mb-12">

                            <span className="text-4xl">
                                🍽️
                            </span>

                            <h2 className="text-4xl font-bold mt-3">
                                Nosso Cardápio
                            </h2>

                            <p className="text-gray-500 mt-3">
                                Confira algumas sugestões deliciosas
                            </p>

                        </div>
                    
                    

                    <input type="text" placeholder="Buscar receitas..." 
                    value={busca} 
                    onChange={(e) => setBusca(e.target.value)} className="w-full max-w-md mx-auto block px-5 py-3 mb-5 rounded-full border-2 border-orange-200 bg-orange-50 text-gray-700 placeholder-gray-400 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"/>

                        <select
                            value={tempoMaximo}
                            onChange={(e) => setTempoMaximo(e.target.value)}
                            className="w-full max-w-md mx-auto block mb-5 mt-4 px-5 py-3 rounded-full border-2 border-orange-200 bg-orange-50 text-gray-700 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
                        >
                            <option value="">⏱️ Qualquer tempo</option>
                            <option value="30">Até 30 minutos</option>
                            <option value="60">Até 60 minutos</option>
                            <option value="90">Até 90 minutos</option>
                        </select>

                        {/* CARDS */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">

                        {receitasFiltradas.length === 0 ? (
                            <p className="text-gray-500 col-span-full text-center">
                                Nenhuma receita encontrada.
                            </p>
                        ) : (
                            receitasFiltradas.map((receita) => (

                                <div key={receita.id} className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition duration-300">
                                    
                                    {/* IMAGEM */}
                                    {receita.image && (
                                        <img
                                            src={receita.image}
                                            alt={receita.title}
                                            className="w-full h-48 object-cover"
                                        />
                                    )}

                                    {/* CONTEÚDO */}
                                    <div className="p-5">

                                        <h3 className="font-bold text-lg line-clamp-2">
                                            {receita.title}
                                        </h3>
                                        <h3 className="text-gray-500 mt-2">
                                            Tempo de preparo: {receita.readyInMinutes} minutos
                                        </h3>

                                        <button onClick={() => setCardAberto(cardAberto === receita.id ? null : receita.id)} className="mt-4 text-orange-500 font-semibold hover:text-orange-600 transition cursor-pointer transition-transform duration-100 hover:scale-105 hover:text-yellow-500">
                                            Ver descrição →
                                        </button>
                                        {cardAberto === receita.id && (
                                            <div>
                                                <p>{receita.instructions}</p>
                                            </div>
                                        )}

                                    </div>

                                </div>

                            ))
                        )}
                    

                    </div>

                    </div>

                </section>


                {/* DEPOIMENTOS */}
                <section
                    id="depoimentos"
                    className="py-20 px-6"
                >

                    <div className="max-w-7xl mx-auto text-center">

                        <span className="text-4xl">
                            ⭐
                        </span>

                        <h2 className="text-4xl font-bold mt-3">
                            O que nossos usuários dizem
                        </h2>

                        <p className="text-gray-500 mt-3">
                            Pessoas que já descobriram o GourmetON
                        </p>


                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">


                            <div className="bg-white p-7 rounded-2xl shadow-md transition cursor-pointer transition-transform duration-100 hover:scale-105 border-2 border-orange-500">

                                <p className="text-gray-600 leading-relaxed">
                                    "Encontrei várias receitas incríveis
                                    para fazer durante a semana!"
                                </p>

                                <h3 className="font-bold mt-5">
                                    João Silva
                                </h3>

                            </div>


                            <div className="bg-white p-7 rounded-2xl shadow-md transition cursor-pointer transition-transform duration-100 hover:scale-105 border-2 border-orange-500">

                                <p className="text-gray-600 leading-relaxed">
                                    "O GourmetON facilitou muito minha
                                    rotina na cozinha."
                                </p>

                                <h3 className="font-bold mt-5">
                                    Ana Souza
                                </h3>

                            </div>


                            <div className="bg-white p-7 rounded-2xl shadow-md transition cursor-pointer transition-transform duration-100 hover:scale-105 border-2 border-orange-500">

                                <p className="text-gray-600 leading-relaxed">
                                    "Sempre encontro algo diferente
                                    para experimentar."
                                </p>

                                <h3 className="font-bold mt-5">
                                    Lucas Mendes
                                </h3>

                            </div>


                        </div>

                    </div>

                </section>

                <section id="sobre" className="scroll-mt-20 py-20 px-6 bg-white">
                    <p className="text-5xl text-center mb-2">👥</p>
                    <h1 className="text-3xl font-bold text-center mb-3">Sobre Nós</h1>
                    <p className="text-center text-gray-600">"Por que eu deveria usar o GourmetON?"</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 p-10">

                        <div className="text-center border-2 border-orange-500 p-6 rounded-lg shadow-md transition cursor-pointer transition-transform duration-100 hover:scale-105">
                                <p>🚀</p>
                                <h2 className="text-xl font-bold mt-4 mb-3">Entrega rápida</h2>
                                <p className="text-gray-600">
                                    Receba seus pedidos com agilidade e aproveite sua refeição sem precisar esperar muito.
                                </p>
                        </div>

                        <div className="text-center border-2 border-orange-500 p-6 rounded-lg shadow-md transition cursor-pointer transition-transform duration-100 hover:scale-105">
                                <p>🍽️</p>
                                <h2 className="text-xl font-bold mt-4 mb-3">Variedade de opções</h2>
                                <p className="text-gray-600">Encontre diferentes pratos e opções de restaurantes para escolher exatamente o que está com vontade de comer.</p>
                        </div>

                        <div className="text-center border-2 border-orange-500 p-6 rounded-lg shadow-md transition cursor-pointer transition-transform duration-100 hover:scale-105">
                                <p>💳</p>
                                <h2 className="text-xl font-bold mt-4 mb-3">Pagamento fácil</h2>
                                <p className="text-gray-600">Faça seus pedidos de forma simples e tenha praticidade na hora de realizar o pagamento.</p>
                        </div> 

                    </div> 

                </section>
                
                {/* FORMULÁRIO DE CONTATO */}
                <section
                    id="contato"
                    className="py-20 px-6 bg-orange-50 scroll-mt-20"
                >
                    <div className="max-w-2xl mx-auto text-center">

                        <span className="text-4xl">
                            📩
                        </span>

                        <h2 className="text-4xl font-bold mt-3">
                            Entre em contato
                        </h2>

                        <p className="text-gray-600 mt-3 mb-8">
                            Cadastre seu e-mail e fique por dentro das novidades do GourmetON.
                        </p>

                        <form className="flex flex-col sm:flex-row gap-3">

                            <input
                                type="email"
                                placeholder="Digite seu e-mail"
                                className="flex-1 px-5 py-3 rounded-full border-2 border-orange-200 bg-white text-gray-700 placeholder-gray-400 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
                            />

                            <button
                                type="submit"
                                className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-full font-semibold transition cursor-pointer shadow-md"
                            >
                                Cadastrar
                            </button>

                        </form>

                    </div>
                </section>
            </main>


            {/* FOOTER */}
            <footer
                className="bg-gray-900 text-white"
                
            >

                <div className="max-w-7xl mx-auto px-6 py-14">


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">


                        {/* MARCA */}
                        <div>

                            <div className="flex items-center gap-2 text-2xl font-bold">

                                🍴

                                Gourmet<span className="text-orange-500">
                                    ON
                                </span>

                            </div>


                            <p className="text-gray-400 mt-4 max-w-sm leading-relaxed">

                                Descubra, cozinhe e aproveite.
                                Sua inspiração para criar pratos incríveis.

                            </p>

                        </div>


                        {/* NAVEGAÇÃO */}
                        <div>

                            <h3 className="font-bold text-lg mb-4">
                                Navegação
                            </h3>


                            <div className="flex flex-col gap-3">

                                <a
                                    href="#inicio"
                                    className="text-gray-400 hover:text-orange-500 transition"
                                >
                                    Início
                                </a>

                                <a
                                    href="#cardapio"
                                    className="text-gray-400 hover:text-orange-500 transition"
                                >
                                    Cardápio
                                </a>

                                <a
                                    href="#depoimentos"
                                    className="text-gray-400 hover:text-orange-500 transition"
                                >
                                    Depoimentos
                                </a>

                                <a
                                    href="#sobre"
                                    className="text-gray-400 hover:text-orange-500 transition"
                                >
                                    Sobre nós
                                </a>

                            </div>

                        </div>


                        {/* CONTATO */}
                        <div>

                            <h3 className="font-bold text-lg mb-4">
                                Redes sociais
                            </h3>


                            <div className="flex flex-col gap-3">

                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-orange-500 transition"
                                >
                                    Instagram
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-orange-500 transition"
                                >
                                    TikTok
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-orange-500 transition"
                                >
                                    YouTube
                                </a>

                            </div>

                        </div>

                    </div>


                    {/* COPYRIGHT */}
                    <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between gap-3 text-sm text-gray-500">

                        <p>
                            © 2026 GourmetON. Todos os direitos reservados.
                        </p>

                        <p>
                            Feito com ❤️ para quem ama cozinhar.
                        </p>

                    </div>

                </div>

            </footer>

        </div>
    );
};

export default Produtos;

