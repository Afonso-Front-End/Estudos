public class Texto {
    
    public static void main(String[] args) {
        
        // Variável de texto
        String texto = "Computação";

        // Quantidade de caracteres
        System.out.println("O texto: " + texto + " possui " + texto.length() + " caracteres");

        // Índice
        int indice = 0;

        // Laço
        do{
            System.out.println(indice + " - " + texto.charAt(indice));
            indice++;
        }while(indice < texto.length());

    }

}