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
    int n, h;
    std::cin >> n >> h;
    
    int height[n];
    int width = 0;
    
    for(int i = 0; i < n; i++){
        std::cin >> height[i];
        if(height[i] > h){
            width++;
            width++;
        }
        else{
            width++;
        }
    }
    
    std::cout << width << std::endl;
    return 0;
}