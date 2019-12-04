
class benchmark {
    public static void main(String args[]) {
        long start = (new java.util.Date()).getTime();
        int result = 0;
        for(int a = 0;a < 100000000;a++) {
            result = result + 12345;
            result = result * 3;
            if(result > 1000000)
                result = result % 1000000;
            result = result / 2;
        }
        long end = (new java.util.Date()).getTime();
        System.out.printf("execution time: %d ms\n", end - start);
    }
}
