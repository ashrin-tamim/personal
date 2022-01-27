/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
C#, VB, Perl, Swift, Prolog, Javascript, Pascal, HTML, CSS, JS
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <bits/stdc++.h>

using namespace std;

int main()
{
    long long n;
    std::cin >> n;
    
    int count = 0;
    
    while(n > 0){
        if(n % 10 == 4 || n % 10 == 7){
            count++;
        }
        n = n / 10;
    }
    //count++;
    
    if(count == 4 || count == 7){
        std::cout << "YES" << std::endl;
    }
    else{
        std::cout << "NO" << std::endl;
    }
    std::cout << count << std::endl;

    return 0;
}

