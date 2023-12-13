function Home({player1, player2}) {
return(
    <div data-bs-theme="dark" className="img">
    <div className="card , position-absolute top-50 start-50 translate-middle" >
        <div className="card-body , bg-black.bg-gradient">

            <div className="card-text "></div>
            <h3 className=" text-center"><b>BEM-VINDO</b></h3>
    
            <h5>insira o nome dos jogadores:</h5>
            
            <div className="form-floating mb-5">
                <input type="text" className="form-control" id="floatingInput" placeholder="Name player1"></input>
                <label for="floatingInput">player1</label>
            </div>
            <div className="form-floating">
                <input type="text" className="form-control" id="floatingPassword"
                    placeholder="Name player2 "></input>
                <label for="floatingInput">player2</label>
            </div>
            <br>
            </br>
            <div className="text-center">
                <button href="" className="btn btn-success  ">JOGAR</button>
            </div>
        </div>
    </div>

</div>
);
}

export {Home};