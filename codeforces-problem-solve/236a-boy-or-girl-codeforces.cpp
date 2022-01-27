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
    string userName;
    std::cin >> userName;

    int count = 0;
    
    int hash[128] = { 0 };
    
    for(int i = 0; i < userName.size(); i++){
        hash[userName[i]] = 1;
    }
    for(int i = 0; i < 128; i++){
        count += hash[i];
    }
    if(count%2 != 0){
        std::cout << "IGNORE HIM!" << std::endl;
    }
    else{
        cout << "CHAT WITH HER!" << endl;
    }

    return 0;
}
