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
    int x, move;
    cin >> x;
    
    if(x >= 5){
        if(x % 5 == 0){
            move = x/5;    
        }
        else if(x % 5 != 0){
            move = x/5;
            move++;
        }
        
    }
    else{
        move = 1;
    }
    
    std::cout << move << std::endl;
    return 0;
}
