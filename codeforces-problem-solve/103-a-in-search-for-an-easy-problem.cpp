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
    
    for(int i = 0; i < n; i++){
        cin >> arr[i];
    }
    int count = 0;
    for(int i = 0; i < n; i++){
        if(arr[i] == 1){
            count++;
            break;
        }
    }
    
    if(count == 1){
        std::cout << "hard" << std::endl;
    }
    else{
        cout << "easy" << endl;
    }


    return 0;
}
