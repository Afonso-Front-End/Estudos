package OrientcaoAobjetos;

public class Pessoa {

    //Atributos
    private String nome;
    private int idade;

    public String getNome() {
        return this.nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdade() {
        return this.idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }
        


    /* Visibilidade de atributos e métodos:
    //
    default;    Atributos e metodos ficam visiveis para objetos na mesma pasta
    public;     Atributos e metodos ficam visiveis idependete a classe que chame
    private;    Atibutos e metodos ficam visiveis apenas na classe onde são criados
    protected;  Atributos e metodos  ficam visiveis apenas na classe onde são criados ou herddados
    //

    Encapsulamento;
    //
    Restringir o uso de atributos e métodos
    */
}
