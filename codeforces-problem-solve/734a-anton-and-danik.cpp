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
    
    string win;
    cin >> win;
    
    int anton = 0, david = 0;
    
    for(int i = 0; i < n; i++){
        if(win[i] == 'A'){
            anton++;
        }
        else if(win[i] == 'D'){
            david++;
        }
    }
    
    if(anton > david){
        std::cout << "Anton" << std::endl;
    }
    else if(anton < david){
        cout << "Danik" << endl;
    }
    else if(anton == david){
        cout << "Friendship" << endl;
    }

    return 0;
}
