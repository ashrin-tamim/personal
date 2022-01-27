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
    long long int n, k;
    std::cin >> n >> k;
    
    if(n % 2 == 0){
        if(k <= n / 2) {
            std::cout << k + (k - 1) << std::endl;
        }
        else {
            std::cout << (k - (n / 2)) + (k - (n / 2)) << std::endl;
        }
    }
    else{
        if(k <= (n / 2) + 1) {
            std::cout << k + (k - 1) << std::endl;
        }
        else {
            std::cout << (k - ((n / 2) + 1)) + (k - ((n / 2) + 1)) << std::endl;
        }
    }

    return 0;
}
