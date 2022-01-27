/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <bits/stdc++.h>

using namespace std;

int main()
{
    
    int n, xsum(0), ysum(0), zsum(0);
    
    cin >> n;
    
    int force[n][3];
    
    for(int i = 0; i < n; i++){
        for(int j = 0; j < 3; j++){
            cin >> force[i][j];
        }
        xsum += force[i][0];
        ysum += force[i][1];
        zsum += force[i][2];
    }
    
    if(xsum == 0 && ysum == 0 && zsum == 0){
        std::cout << "YES" << std::endl;
    }
    else{
        cout << "NO" << endl;
    }
    
    return 0;
}
