/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <bits/stdc++.h>

using namespace std;

int main()
{
    
    int matrix[5][5];
    
    int row, column;
    
    int m = 0;
    int n = 0;
    
    for(int i = 0; i < 5; i++){
        for(int j = 0; j < 5; j++){
            std::cin >> matrix[i][j];
            
            if(matrix[i][j] == 1){
                row = i;
                column = j;
            }
        }
    }
    
    while(row < 2){
        m++;
        row++;
    }
    while(row > 2){
        m++;
        row--;
    }
    while(column < 2){
        n++;
        column++;
    }
    while(column > 2){
        n++;
        column--;
    }
    
    std::cout << m + n << std::endl;
    
    return 0;
}

