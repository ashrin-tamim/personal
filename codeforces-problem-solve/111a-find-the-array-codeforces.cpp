/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <bits/stdc++.h>

using namespace std;

int main()
{
    int t;
    
    std::cin >> t;
    
    for(int i = 0; i < t; i++){
        int s;
        cin >> s;
        long long sum = 0;
        int ans = 0;
        int increment = 1;
        while(sum < s){
            sum += increment;
            increment += 2;
            ans++;
        }
        std::cout << ans << std::endl;
    }
    return 0;
}



