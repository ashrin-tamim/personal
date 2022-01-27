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
    std::cin >> n;
    
    int numbers[n];
    
    for(int i = 0; i < n; i++){
        cin >> numbers[i];
    }
    
    for(int j = 0; j < n; j++){
        for(int i = 0; i < n-1; i++){
            if(numbers[i] < numbers[i+1]){
                swap(numbers[i], numbers[i+1]);
            }
        }
    }
    
    int sum = 0;
    
    for(int i = 0; i < n; i++){
        sum += numbers[i];
    }
    
    int sum2 = 0;
    int count = 0;
    
    for(int i = 0; i < n; i++){
        sum2 += numbers[i];
        count++;
        
        if(sum2 > sum / 2){
            break;
        }
    }
    
    cout << count;
    
    return 0;
}
