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
    string input;
    std::cin >> input;
    
    int c = 0;

    for(int i = 0; i < input.size(); i++){
        if(input[i] == 'H' || input[i] == 'Q' 
        || input[i] == '9' /*|| input[i] == '+'*/){
            std::cout << "YES" << std::endl;
            break;
        }else{
            c++;
        }
    }
    if(c == input.size()){
        cout << "NO" << endl;
    }
    return 0;
}
