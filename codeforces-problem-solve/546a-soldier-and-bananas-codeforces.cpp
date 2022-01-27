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
    int unit_price, money, banana_number;
    cin >> unit_price >> money >> banana_number;
    
    int total_price = 0, remaining_money = 0;
    
    for(int i = 1; i <= banana_number; i++){
        total_price += i * unit_price;
    }
    
    remaining_money = total_price - money;
    
    if(remaining_money <= 0){
        cout << "0" << endl;
    }
    else{
        std::cout << remaining_money << std::endl;
    }
    return 0;
}


