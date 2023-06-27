package OrientcaoAobjetos.Construtor;

import javax.swing.JOptionPane;

public class Pessoa {
    //Atributos

    //Construtor
    public Pessoa(){
        JOptionPane.showMessageDialog(null, "Hello Word");
    }
     
    public Pessoa(String nome){
        JOptionPane.showMessageDialog(null,"Ola" +nome);
    }
    public Pessoa(String nome, int idade){
        JOptionPane.showMessageDialog(null, "ola" +nome+ "voce tem" + idade);
    }
}
