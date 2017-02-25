#ifndef COIN_H_
#define COIN_H_

/*
Class name: Coin
Each coin has it's own value.
Flip returns a boolean value.
*/
class Coin
{
    private:
        // value of coin in decimal
        int valueDec_;
        std::string valueBin_;
        int count_;
        int maxDecimal_;

    public:
        int flip();
        int maxDecimal(int );
        void print();
        std::string decToBin();
        // Constructor initializes value by calling flip()
        Coin(int count);

};

#endif //COIN_H_
