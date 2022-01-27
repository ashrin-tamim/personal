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
    int n;
    std::cin >> n;
    
    int pi[n];
    int qi[n];
    
    int count = 0;
    
    for(int i = 0; i < n; i++){
        cin >> pi[i] >> qi[i];
        if(qi[i] - pi[i] >= 2){
            count++;
        }
    }
    
    std::cout << count << std::endl;
    return 0;
}
