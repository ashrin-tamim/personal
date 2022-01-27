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
    int num_of_statements;
    int value = 0;
    
    std::cin >> num_of_statements;
    
    string statements[num_of_statements];
    
    for(int i = 0; i < num_of_statements; i++){
        
        cin >> statements[i];
        
        if(statements[i] == "++X" || statements[i] == "X++"){
            value++;
        }
        else if(statements[i] == "--X" || statements[i] == "X--"){
            value--;
        }
    }
    
    std::cout << value << std::endl;

    return 0;
}
