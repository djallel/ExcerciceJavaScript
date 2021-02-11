public class BreakContinue {

    static void ContinueBreakAvecLabel(){
        first:
        for (int i = 0; i < 4; ++i)
        {
            second:
            for (int j = 0; j < 4; ++j)
            {
                third:
                for (int k = 0; k < 4; ++k)
                {
                    System.out.println ("inner start: i+j+k " + (i + j + k));
                    if (i + j + k == 5)
                        continue third;
                    if (i + j + k == 7)
                        continue second;
                    if (i + j + k == 8)
                        break second;
                    if (i + j + k == 9)
                        break first;
                    System.out.println ("inner stop:  i+j+k " + (i + j + k));
                }
            }
        }
    }

    static void ContinueBreakSansLabel(){
        System.out.println ("starting loop:");
        for (int n = 0; n < 7; ++n)
        {
            System.out.println ("in loop: " + n);
            if (n == 2) {
                continue;
            }
            System.out.println ("   survived first guard");
            if (n == 4) {
                break;
            }
            System.out.println ("   survived second guard");
            // continue at head of loop
        }
// break out of loop
        System.out.println ("end of loop or exit via break");
    }
    public static void main(String[] args) {
ContinueBreakSansLabel();
//ContinueBreakAvecLabel();
    }
}
