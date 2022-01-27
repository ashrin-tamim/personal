/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
C#, VB, Perl, Swift, Prolog, Javascript, Pascal, HTML, CSS, JS
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <iostream>
#include <string>

using namespace std;

int main()
{
    int n;
    cin >> n;
    string word[n];
    
    if(n >= 1 && n <= 100){
        for(int i = 0; i < n; i++){
            std::cin >> word[i];
        }
        for(int j = 0; j < n; j++){
            if(word[j].length() < 11){
                std::cout << word[j] << std::endl;    
            }
            else{
                cout << word[j].front() << word[j].length() - 2 << word[j].back() << endl;
            }
        }
    }
    return 0;
}






