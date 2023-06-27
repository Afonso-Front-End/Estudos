package OrientcaoAobjetos;

public class Principal {
    public static void main(String[] args) {

        Pessoa obejeto = new Pessoa();
        obejeto.setNome("Afonso");
        obejeto.setIdade(22);

        System.out.println(obejeto.getNome());
        System.out.println(obejeto.getIdade());
    }
}
