/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
C#, VB, Perl, Swift, Prolog, Javascript, Pascal, HTML, CSS, JS
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <iostream>
#include <cmath>

using namespace std;

int main()
{
    double n, m, a;
    cin >> n >> m >> a;
    
    double width, length, number_of_tiles;
    width = ceil(n / a);
    length = ceil(m / a);
    number_of_tiles =  width * length;
    cout << (long long) number_of_tiles << endl;
            
    return 0;
}

