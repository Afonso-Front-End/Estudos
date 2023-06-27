package OrientcaoAobjetos.Metodos;

import javax.swing.JOptionPane;

public class Aluno {
    //atributos
    private String nome;
    private double nota1, nota2;

    //contrutor
    public Aluno(){
        obterDados();
        double retornoMedia = media();
        String retornoSituacao = situacao(retornoMedia);

        String mensagem = "O Aluno(a) "+nome+ " obteve média " +retornoMedia+ " e está "+retornoSituacao;
        JOptionPane.showMessageDialog(null,mensagem);
    }

    //metodo para obter o nome e as notas
    private void obterDados(){
        nome = JOptionPane.showInputDialog(null, "Informe seu nome");
        nota1 = Double.parseDouble(JOptionPane.showInputDialog(null, "nota1"));
        nota2 = Double.parseDouble(JOptionPane.showInputDialog(null, "nota2"));
    }

    //Metodo para realizar a media
    private double media(){
        return (nota1 + nota2)/2;
    }

    //metodo para reaslizar a situação
    private String situacao(double media){
        return media >= 7 ? "Aprovado(a)" : "Reprovado(a)";
    }


}
