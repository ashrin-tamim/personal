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
    string word1, word2;
    
    long long value1 = 0;
    long long value2 = 0;
    
    std::cin >> word1 >> word2;
    
    transform(word1.begin(), word1.end(), word1.begin(), ::tolower);
    transform(word2.begin(), word2.end(), word2.begin(), ::tolower);

    
    /*for(int i = 0; i < word1.size(); i++){
        value1 += word1[i];
        value2 += word2[i];
    }
    
    if(value1 < value2){
        cout << "-1" << endl;
    }
    else if(value1 > value2){
        cout << "1" << endl;
    }
    else if(word1 == word2){
        cout << "0" << endl;
    }*/
    
    if(word1 < word2){
        cout << "-1" << endl;
    }
    else if(word1 > word2){
        cout << "1" << endl;
    }
    else if(word1 == word2){
        cout << "0" << endl;
    }
    
    return 0;
}
