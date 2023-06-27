import javax.swing.JOptionPane;

public class CaixaMensagem {
    public static void main(String[] args) {
        
        //Exibir mensagem

        //JOptionPane.showMessageDialog(null, "Helo World");

        //pedir um nome
        String nome = JOptionPane.showInputDialog(null, "Qual o seu nome? ");
        JOptionPane.showMessageDialog(null, "Bom dia"+nome);
    }
}

