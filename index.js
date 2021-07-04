class Cliente{
    nome;
    cpf;
    agencia;
    saldo;
 
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();
const cliente3 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.agencia = 1001;
cliente1.saldo = 0;


cliente2.nome = "Alice";
cliente2.cpf = 88822233309;
cliente2.agencia = 1001;
cliente2.saldo = 0;


const cliente3Nome = "Alice";
const cliente3CPF = 88822233309;
const cliente3Agencia = 1001;
const cliente3Saldo = 0;

cliente3.nome = cliente3Nome;
cliente3.cpf = cliente3CPF;
cliente3.agencia = cliente3Agencia;
cliente3.saldo = cliente3Saldo;

console.log(cliente1, cliente2, cliente3);