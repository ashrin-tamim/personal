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
    
    int arr[n];
    int new_arr[n];
    
    for(int i = 0; i < n; i++){
        cin >> arr[i];
    }
    int k = 0;
    int j = 1;
    for(int i = 0; i < n; i++){
        for(int m = 0; m < n; m++){
            if(arr[m] == j){
                new_arr[k] = m + 1;
                k++;
                j++;
                break;
            }
        }
    }
    for(int i = 0; i < n; i++){
        std::cout << new_arr[i] << " ";    
    }
    
    return 0;
}



