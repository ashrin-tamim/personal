/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*************************************************************************************/
#include <bits/stdc++.h>

using namespace std;

int main()
{
    int limak, bob, i = 0;
    std::cin >> limak >> bob;

    while(limak <= bob){
        limak = limak*3;
        bob = bob*2;
        
        i++;
    }
    
    std::cout << i << std::endl;
    return 0;
}
