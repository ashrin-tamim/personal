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
    
    transform(input.begin(), input.end(), input.begin(), ::tolower);
    
    
    input.erase(remove(input.begin(), input.end(), 'a'), input.end());
    input.erase(remove(input.begin(), input.end(), 'e'), input.end());
    input.erase(remove(input.begin(), input.end(), 'i'), input.end());
    input.erase(remove(input.begin(), input.end(), 'o'), input.end());
    input.erase(remove(input.begin(), input.end(), 'u'), input.end());
    input.erase(remove(input.begin(), input.end(), 'y'), input.end());
    
    
    for(int i = 0; i < input.size(); i++){
        cout << "." << input[i];    
    }

    return 0;
}


