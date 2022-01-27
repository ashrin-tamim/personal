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
    int n, t;
    std::cin >> n >> t;
    
    string line;
    cin >> line;
    
    for(int j = 0; j < t; j++){
        for(int i = 0; i < n;){
            if(line[i] == 'B' && line[i+1] == 'G'){
                swap(line[i], line[i+1]);
                i = i + 2;
            }
            else if(line[i] == 'G' && line[i+1] == 'B'){
                i++;
            }
            else if(line[i] == 'G' && line[i+1] == 'G'){
                i++;
            }
            else if(line[i] == 'B' && line[i+1] == 'B'){
                i++;
            }
            else{
                break;
            }
            
        }
    }
    std::cout << line << std::endl;
    
    return 0;
}


