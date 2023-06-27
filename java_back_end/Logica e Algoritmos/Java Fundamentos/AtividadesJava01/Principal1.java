package AtividadesJava01;

import java.util.ArrayList;

import javax.swing.JOptionPane;

public class Principal1 {
    public static void main(String[] args) {
        
        ArrayList<Produto> dados = new ArrayList<Produto>();

        //menu
        String menu = "O que  deseja fazer? \n";
        menu+="1) Cadastrar \n";
        menu+="2) Selecionar \n";
        menu+="3) Sair \n";

        //variavel para sair do laço
        boolean continuar = true;
        
        //laço
        do{
            //obter opção
            int opcao = Integer.parseInt(JOptionPane.showInputDialog( null, menu));

            //escolha

            switch(opcao){
                case 1:
                Produto pr1 = new Produto();
                //
                pr1.nome = JOptionPane.showInputDialog(null, "Imforme o nome");
                //
                pr1.marca = JOptionPane.showInputDialog(null, "Informe a Marca");
                //
                pr1.valor = Integer.parseInt(JOptionPane.showInputDialog(null, "Informe o valor"));

                dados.add(pr1);

                //exibir lista
                JOptionPane.showMessageDialog(null, "Cadastro efetuado com sucesso!");
                
                break;

                //Listas de pessoas cadastradas
                case 2:

                String lista = "Produtos Cadastrados \n";

                for(int i=0; i<dados.size();i++){
                    lista += "\n Nome: " + dados.get(i).nome;
                    lista += "\n Marca: "+ dados.get(i).marca;
                    lista += "\n Valor: "+ dados.get(i).valor;

                    //exibir lista
                    JOptionPane.showMessageDialog(null, lista);
                    break;
                    
                    
                }
    

            }
            
        }while(continuar == true);
    }
}