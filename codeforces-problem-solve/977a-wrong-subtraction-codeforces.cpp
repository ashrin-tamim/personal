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
    int number, subtruction;
    
    std::cin >> number >> subtruction;
    
    for(int i = 0; i < subtruction; i++){
        if(number%10 != 0){
            number--;
        }
        else if(number%10 == 0){
            number = number/10;
        }
    }
    
    std::cout << number << std::endl;

    return 0;
}

