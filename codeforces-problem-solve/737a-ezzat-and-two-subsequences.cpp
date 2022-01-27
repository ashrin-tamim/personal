/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <iostream>
#include <iomanip>
 
using namespace std;
 
int main()
{
    int t;
    std::cin >> t;
    
    for(int m = 0; m < t; m++){
        int n;
        cin >> n;
        int arr_1[n];
        double sum_1 = 0, sum_2 = 0; 
        
        for(int i = 0; i < n; i++){
            std::cin >> arr_1[i];
        }
        sum_1 = arr_1[0];
        for(int i = 0; i < n; i++){
            if(arr_1[i] > sum_1){
                sum_1 = arr_1[i];
            }
            sum_2 += arr_1[i];
        }
        std::cout << setprecision(9) << fixed << (sum_2 - sum_1) / (n - 1) + sum_1 << std::endl;
    }
   
    return 0;
}




