import { jsPDF } from 'jspdf';

export function gerarPDF() {
  const doc = new jsPDF();
  doc.text('Dados da Equipe:', 10, 10);
  doc.text('- Nome do Integrante 1', 10, 20);
  doc.text('- Nome do Integrante 2', 10, 30);
  doc.text('Repositório do GitHub: https://github.com/seu-repositorio', 10, 40);
  doc.save('dados-equipe.pdf');
}
