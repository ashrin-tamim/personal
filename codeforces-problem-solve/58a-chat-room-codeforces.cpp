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
    string word;
    std::cin >> word;
    
    int num1, num2 = 0;
    
    for(int i = 0; i < word.size(); i++){
        if(word[i] == 'h'){
            num1 = i + 1;
            num2++;
            break;
        }
    }
    for(int i = num1; i < word.size(); i++){
        if(word[i] == 'e'){
            num1 = i + 1;
            num2++;
            break;
        }
    }
    for(int i = num1; i < word.size(); i++){
        if(word[i] == 'l'){
            num1 = i + 1;
            num2++;
            break;
        }
    }
    for(int i = num1; i < word.size(); i++){
        if(word[i] == 'l'){
            num1 = i + 1;
            num2++;
            break;
        }
    }
    for(int i = num1; i < word.size(); i++){
        if(word[i] == 'o'){
            num1 = i + 1;
            num2++;
            break;
        }
    }
    
    if(num2 == 5){
        std::cout << "YES" << std::endl;
    }
    else{
        cout << "NO" << endl;
    }
    
    return 0;
}

