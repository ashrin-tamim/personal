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
    int y;
    std::cin >> y;
    
    for(int i = y + 1; i >= y; i++){
        int count = 0;
        int r = i;
        int digit[4];
        int j = 0;
        while(j < 4){
            digit[j] = r % 10;
            r = r / 10;
            j++;
        }
        for(int k = 0; k < 4; k++){
            for(int m = 1; m < 4; m++){
                if(digit[k] != digit[m] && m > k){
                    count++;
                }
            }
        }
        if(count == 6){
            for(int l = 0; l < 4; l++){
                cout << digit[3-l];
            }
            break;
        }
    }
   
    return 0;
}

