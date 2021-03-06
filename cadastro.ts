document.querySelector('#criar-conta').addEventListener('click', (w)=>{
    w.preventDefault();
    let email = document.querySelector('#email').value as HTMLInputElement;
    let senha = document.querySelector('#senha').value as HTMLInputElement;
    let repitaSenha = document.querySelector('#repsenha').value as HTMLInputElement;

    salvar(email, senha, repitaSenha);
});


function salvar(e, s, r){
    let db = JSON.parse(localStorage.getItem('usuarios') || '[]');
    
    let usuario = {
        id: db.length + 1,
        email: e,
        senha: s,
        repitaSenha: r
    }
    
    db.push(usuario);
    
    localStorage.setItem('usuarios', JSON.stringify(db));
    location.href = 'login.html';    
}
