/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <bits/stdc++.h>

using namespace std;

int main()
{
    string input;
    
    std::cin >> input;
    
    if(input.size() > 2){
        for(int j = 0; j < input.size() - 2;){
            for(int i = 0; i < input.size() - 2; ){
                if(input[i] > input[i+2]){
                    swap(input[i], input[i+2]);            
                }
                i = i+2;
            }
            j = j+2;
        }    
    }
    std::cout << input << std::endl;

    return 0;
}