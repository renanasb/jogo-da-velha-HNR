function Home({player1, player2}) {
return(
    <div data-bs-theme="dark">
    <h1 style={{color: 'white', marginTop: '90px'}}>Login</h1>
    <div className='tabelaMatrix'>
        <div className="tabelaMatrix2">
            <p></p>
            <p></p>
            <div className="form-floating">
                <input type="text" className="form-control" placeholder="Nome de usuário" id="entradaa"/>
                <label for="nomeUsuario">Player 1</label>
            </div>
            <div style={{marginBottom: '70px'}}></div>
            <div className="form-floating">
                <input className="form-control" type="text" id="entradaa" placeholder="Nome de usuário"/>
                <label for="nomeUsuario">Player 2</label>
            </div>
            <div style={{marginBottom: '70px'}}></div>
                <div style={{marginBottom: '70px'}}></div>
                <a href="./pages/boletim.html">
                    <button className="botao">Entrar</button>
                </a>
            </div>
            <p></p>
            <p></p>
        </div>
    </div>
);
}

export {Home};