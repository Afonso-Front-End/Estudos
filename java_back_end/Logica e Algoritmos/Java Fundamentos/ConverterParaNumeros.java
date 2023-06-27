import javax.swing.JOptionPane;

public class ConverterParaNumeros {
    
    public static void main(String[] args) {

        /*
            Double.parseDouble() : Converte um texto para um número real
            Integer.parseInt() : Converte um texto para um número inteiro
        */
        
        try{
            double nota1 = Double.parseDouble(JOptionPane.showInputDialog(null, "Informe a 1ª nota"));
            double nota2 = Double.parseDouble(JOptionPane.showInputDialog(null, "Informe a 2ª nota"));

            double media = (nota1+nota2)/2;

            JOptionPane.showMessageDialog(null, "A média é "+media);
        }catch(Exception erro){
            JOptionPane.showMessageDialog(null, "Favor informar apenas números");
        }   

    }

}
