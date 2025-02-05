class Solution {
    public boolean areAlmostEqual(String s1, String s2) {
        int i = -1, j = -1;
        int c = 0;
        for(int a=0;a<s1.length();a++)
        {
            if(s1.charAt(a) != s2.charAt(a))
            {
                c++;
                if(i==-1) i=a;
                else if(j==-1) j=a;
            }
        }
        if(c==0)
            return true;
        if( c==2 && s1.charAt(i)==s2.charAt(j) && s1.charAt(j)==s2.charAt(i))
            return true;
        return false;
    }
}