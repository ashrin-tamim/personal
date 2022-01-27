/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <iostream>

using namespace std;

int main()
{
    int t;
    std::cin >> t;
    
    while(t--){
        int number;
        std::cin >> number;
        int mm = number - 1;
        int nn = mm / 2;
        
        std::cout <<  nn << " " << mm << std::endl;
    }

    return 0;
}



