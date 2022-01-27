/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <bits/stdc++.h>

using namespace std;

int main()
{
    int n, k, num;
    num = 0;
    
    std::cin >> n >> k;
    
    int points[n];
    
    for(int i = 0; i < n; i++){
        cin >> points[i];
        
        //std::cout << 5 << std::endl;
    }
    for(int j = 0; j < n; j++){
        if(points[j] >= points [k-1] && points[j] > 0){
            num++;
        }
    }
    std::cout << num << " ";

    return 0;
}

