import javax.swing.JOptionPane;

public class CaixaDeConfirmacao {

    public static void main(String[] args) {
        
        // Menu
        String menu = "Escolha uma cidade";
               menu+= "\n1)Blumenau";
               menu+= "\n2)Indaial";
               menu+= "\n3)Joinville";

        // Armazenar a opção de cidade escolhida
        int opcao = Integer.parseInt(JOptionPane.showInputDialog(null, menu));

        // Escolha
        switch(opcao){
            case 1:
            JOptionPane.showMessageDialog(null, "Você escolheu Blumenau");
            break;

            case 2:
            JOptionPane.showMessageDialog(null, "Você escolheu Indaial");
            break;

            case 3:
            JOptionPane.showMessageDialog(null, "Você escolheu Joinville");
            break;

            default:
            JOptionPane.showMessageDialog(null, "Opção inválida");
        }

        // Opinião sobre a enquete
        int enquete = JOptionPane.showConfirmDialog(null, "Gostou da enquete?");

        switch(enquete){
            case 0:
            JOptionPane.showMessageDialog(null, "Que bom!");
            break;

            case 1:
            JOptionPane.showMessageDialog(null, "Que pena");
            break; 

            default:
            JOptionPane.showMessageDialog(null, "Bye!");
        }

    }
    
}
