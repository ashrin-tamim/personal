/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <bits/stdc++.h>

using namespace std;

int main()
{
    
    int num_of_stations; 
    std::cin >> num_of_stations;
    
    int exit_passngr[num_of_stations], enter_passngr[num_of_stations]
    
    int capacity = 0, sum = 0;
    
    for(int i = 0; i < num_of_stations; i++){
        cin >> exit_passngr[i] >> enter_passngr[i];
        
        sum -= exit_passngr[i];
        sum += enter_passngr[i];
        
        capacity = max(capacity, sum);
    }
    std::cout << capacity << std::endl;
    return 0;
}


