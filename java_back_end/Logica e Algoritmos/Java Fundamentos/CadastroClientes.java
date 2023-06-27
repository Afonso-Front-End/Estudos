import javax.swing.JOptionPane;

public class CadastroClientes {
    
    public static void main(String[] args) {
        
        // Vetor
        String[] clientes = new String[10];

        // Contador
        int contador = 0;

        // Laço
        do{
            clientes[contador] = JOptionPane.showInputDialog(null, "Informe o nome do cliente");

            int continuar = JOptionPane.showConfirmDialog(null, "Deseja continuar?");

            if(continuar == 0){
                contador++;
            }else{
                contador = 10;
            }
        }while(contador < 10);

        // Listar clientes
        String mensagem = "Clientes cadastrados:\n";
        for(int i=0; i<clientes.length; i++){
            if(clientes[i] != null){
                mensagem += clientes[i] + "\n";
            }
        }

        JOptionPane.showMessageDialog(null, mensagem);
        
    }

}