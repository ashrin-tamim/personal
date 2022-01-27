/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <bits/stdc++.h>

using namespace std;

int main()
{
    string word;
    cin >> word;
    
    int small = 0, capital = 0;
    
    for(int i = 0; i < word.size(); i++){
        if(word[i] > 64 && word[i] < 91 ){
            capital++;
        }
        else if(word[i] > 96 && word[i] < 123){
            small++;
        }
    }
    
    if(capital > small){
        transform(word.begin(), word.end(), word.begin(), ::toupper);
    }
    else if(small > capital){
        transform(word.begin(), word.end(), word.begin(), ::tolower);
    }
    else if(small == capital){
        transform(word.begin(), word.end(), word.begin(), ::tolower);
    }
    
    std::cout << word << std::endl;
    return 0;
}
