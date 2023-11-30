let vitorias = 110;
let derrotas = 2;
let saldo;
let nivelMsg;

saldo = saldoVitorias(vitorias, derrotas);
nivelMsg = nivel(saldo);
mensagem(saldo, nivelMsg);

function saldoVitorias(vitorias, derrotas) {
  return vitorias - derrotas;
}

function nivel(saldo) {
  if (saldo <= 10) return "Ferro";
  else if (saldo <= 20) return "Bronze";
  else if (saldo <= 50) return "Prata";
  else if (saldo <= 80) return "Ouro";
  else if (saldo <= 90) return "Diamante";
  else if (saldo <= 100) return "Lendário";
  else if (saldo >= 101) return "Imortal";
}

function mensagem(saldoVitorias, nivel) {
  console.log(
    "O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel
  );
}
