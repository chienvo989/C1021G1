package SS4_LopVaDoiTuong.BaiTap.Fan;

public class Main {
    public static void main(String[] args) {
        Fan fan1 = new Fan(3 ,false , 5, "blue");
        System.out.println(fan1.toString());
        Fan fan2 = new Fan(3 ,true , 5, "blue");
        System.out.println(fan2.toString());

    }
}
