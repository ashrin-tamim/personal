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
    int t_case;
    
    std::cin >> t_case;
    
    int number[t_case];
    
    int sum[t_case] = {0};
    
    for(int i = 0; i < t_case; i++){
        cin >> number[i];
        while(number[i] > 0){
            sum[i] = max(sum[i], number[i]%10);
            number[i] = number[i]/10;
        }
    }
    
    for(int i = 0; i < t_case; i++){
        cout << sum[i] << endl;
    }
    
    return 0;
}