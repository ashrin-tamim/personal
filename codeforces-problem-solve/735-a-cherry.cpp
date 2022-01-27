/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <bits/stdc++.h>

using namespace std;

int main()
{
    int t;
    std::cin >> t;
    
    //long long arry[t];
    for(int i = 0; i < t; i++){
        int num_of_int;
        std::cin >> num_of_int;
        
        long long arr[num_of_int];
        for(int j = 0; j < num_of_int; j++){
            std::cin >> arr[j];
        }
        long long max_v = 0;
        for(int k = 0; k < num_of_int - 1; k++){
            max_v = max(max_v, arr[k] * arr[k+1]);
        }
        //arry[i] = max_v;
        std::cout << max_v << std::endl;
    }
    
    /*for(int i = 0; i < t; i++){
        cout << arry[i] << endl;
    }*/

    return 0;
}


