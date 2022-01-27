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
    string players;
    std::cin >> players;
    
    int count = 1, answer;
    
    for(int i = 0; i < players.size(); i++){
        if(players[i] == players[i+1]){
            count++;
            if(count == 7){
                std::cout << "YES" << std::endl;
                return 0;
            }
        }
        else{
            count = 1;
        }
    }
    
    cout << "NO" << endl;
    
    return 0;
}


