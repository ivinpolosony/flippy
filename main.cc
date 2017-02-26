#include <iostream>
#include "Coin.h"
using namespace std;

int main(int argc, char * argv[])
{
    while(true)
    {
        cout << "How many coin game? :" ;
        int count = 0;
        cin >> count;
        Coin coin(count);
        coin.print();
    }

    return 0;
}
