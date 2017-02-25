#include <iostream>
#include <stdlib.h>
#include <time.h>
#include <string>
#include <algorithm>
#include "Coin.h"
using namespace std;

// Randomize a 0 or 1 based on a time seed
int Coin::flip()
{
    srand (time(NULL));
    int i = rand()% this->maxDecimal_;

    return i;
}

int Coin::maxDecimal()
{
    string binary = "";
    for(int i=0; i < count_;i++)
    {
        binary += "1";
    }

    return stoi(binary, nullptr, 2);
}

std::string Coin::decToBin()
{
    string bin= "";
    int toBin = valueDec_;

    while (toBin>=1)
        {
        bin = to_string(toBin%2)+ bin;
        toBin = toBin/2;
    }

    return bin;
}

Coin::Coin(int count)
{
    count_ = count;
    valueBin_ = "";
    maxDecimal_ = maxDecimal(count);
    valueDec_ = flip();
    valueBin_ = decToBin();
}

void Coin::print()
{
    cout << "  Decimal Value: " << valueDec_ << endl;
    cout << "  Binary Value : " << valueBin_ << endl;
    cout << "  Coin Count   : " << count_    << endl;

}
