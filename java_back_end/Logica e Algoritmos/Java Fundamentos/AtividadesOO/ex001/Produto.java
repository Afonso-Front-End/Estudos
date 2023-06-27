package AtividadesOO.ex001;

import javax.swing.JOptionPane;

public class Produto {
    //atributos
    private String nome;
    private int formaPagamento;
    private double valor;

    //contrutor
    public 
        Produto(){
        obterDados();

        JOptionPane.showMessageDialog(null, mensagem());
    }
    
    //obter dados
    private void obterDados(){
       nome = JOptionPane.showInputDialog(null, "Informe o Produto ");

       formaPagamento = Integer.parseInt(JOptionPane.showInputDialog(null, "1)A vista \n2)A prazo \n"));

       valor = Double.parseDouble(JOptionPane.showInputDialog(null, " Valor da compra "));

    }

    //metodo
    private double calculo(){
        double total;
        if(valor >= 500 && formaPagamento == 1){
            total = valor * 0.9;
        }else{
            total = valor;

        }
        return total;
    }

    //mensgem
    private String mensagem(){
        String texto = "O produto "+nome+ "irá custar R$"+calculo();
        return texto;
    }
}
